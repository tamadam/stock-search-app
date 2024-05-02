import StockQuoteResults from "./components/StockQuoteResults/StockQuoteResults";
import Search from "./components/Search/Search";
import { FormattedStockQuote, StockQuote } from "./types";

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const apiKey = process.env.ALPHAVANTAGE_API_KEY;

const getQuotes = async (searchQuery: string) => {
  const targetUrl = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=${apiKey}`;
  console.log(targetUrl);

  const demoTargetUrl =
    "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo";

  const res = await fetch(demoTargetUrl, {
    cache: "no-store",
  });

  return res.json();
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const searchQuery = Array.isArray(searchParams["query"])
    ? searchParams["query"][0]
    : searchParams["query"] ?? "";

  const quotes: StockQuote = await getQuotes(searchQuery);

  const formattedQuotes: FormattedStockQuote[] = quotes.bestMatches.map(
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
    <main className="flex flex-col gap-4 items-center min-h-svh mt-5 px-2">
      <div>
        <h1 className="font-bold text-center">
          Enter what you are looking for
        </h1>
        <Search />
      </div>
      <StockQuoteResults quotes={formattedQuotes} />
    </main>
  );
};

export default SearchPage;
