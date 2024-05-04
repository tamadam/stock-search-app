import StockQuoteResults from "../components/StockQuoteResults/StockQuoteResults";
import Search from "../components/Search/Search";
import {
  ALPHAVANTAGE_API_KEY,
  FormattedStockQuote,
  StockQuote,
} from "../types";

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

  console.log(targetUrl);

  const res = await fetch(targetUrl, {
    cache: "no-store",
  });

  return res.json();
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const searchQuery = Array.isArray(searchParams["query"])
    ? searchParams["query"][0]
    : searchParams["query"] ?? "";

  const quotes: StockQuote = await getQuotes(searchQuery);
  console.log(quotes);

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
      };
    }
  );

  return (
    <main className="">
      <div className="m-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-md p-8 md:p-12 text-center max-w-[1200px]">
        <div>
          <h1 className="font-bold text-2xl md:text-4xl text-[#ffe30d] mb-4">
            Alpha Vantage Stock Quotes
          </h1>
          <Search />
        </div>
      </div>
      <div className="m-4 text-left">
        <StockQuoteResults quotes={formattedQuotes} />
      </div>
    </main>
  );
};

export default SearchPage;
