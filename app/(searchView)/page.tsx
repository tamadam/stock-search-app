import StockQuoteResults from "./components/StockQuoteResults/StockQuoteResults";
import Search from "./components/Search/Search";
import {
  ALPHAVANTAGE_API_KEY,
  FormattedStockQuote,
  StockQuote,
} from "../types";
import { Metadata } from "next";
import { fetchData } from "../utils/fetchData";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { Stock } from "@prisma/client";
import authOptions from "../utils/authOptions";
import Link from "next/link";
import { IoExit } from "react-icons/io5";
import { RiLoginBoxLine } from "react-icons/ri";

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const getQuotes = async (searchQuery: string) => {
  let targetUrl = "";
  if (searchQuery) {
    targetUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=${ALPHAVANTAGE_API_KEY}`;
  } else {
    targetUrl =
      "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo";
  }

  // console.log(targetUrl);

  return fetchData(targetUrl);
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  let savedQuotes: Stock[] = [];
  if (userId) {
    savedQuotes = await prisma.stock.findMany({
      where: {
        userId,
      },
    });
  }

  const searchQuery = Array.isArray(searchParams["query"])
    ? searchParams["query"][0]
    : searchParams["query"] ?? "";

  const quotes: StockQuote = await getQuotes(searchQuery);
  // console.log(quotes);

  const formattedQuotes: FormattedStockQuote[] = quotes?.bestMatches.map(
    (quote) => {
      return {
        symbol: quote["1. symbol"],
        name: quote["2. name"],
        type: quote["3. type"],
        region: quote["4. region"],
        marketOpen: quote["5. marketOpen"],
        marketClose: quote["6. marketClose"],
        timezone: quote["7. timezone"],
        currency: quote["8. currency"],
        matchScore: quote["9. matchScore"],
        saved: Boolean(
          savedQuotes.find((saved) => saved.symbol === quote["1. symbol"])
        ),
      };
    }
  );

  return (
    <main>
      <nav className="flex items-center justify-end px-4 py-2 bg-sky-700 text-white">
        {session ? (
          <div>
            <Link href="/api/auth/signout" className="flex items-center gap-1">
              <span>Exit</span>
              <IoExit />
            </Link>
          </div>
        ) : (
          <Link href="/api/auth/signin" className="flex items-center gap-1">
            <RiLoginBoxLine />
            <span>Login</span>
          </Link>
        )}
      </nav>
      <div className="flex items-center justify-center bg-sky-600 min-h-[15rem]">
        <div className="grid gap-4 w-full max-w-[80ch] text-center px-4 ">
          <h1 className="font-bold text-2xl md:text-4xl text-[#ffffff]">
            Alpha Vantage Stock Quotes
          </h1>
          <Search />
        </div>
      </div>
      <div className="p-4 mb-5">
        <StockQuoteResults quotes={formattedQuotes} />
      </div>
    </main>
  );
};

export default SearchPage;

export const metadata: Metadata = {
  title: "Stock Search App - Search View",
  description: "Search view for finding stocks",
};
