import {
  ALPHAVANTAGE_API_KEY,
  FormattedGlobalQuote,
  GlobalQuote,
} from "../../types";
import StockQuoteDetails from "../components/StockQuoteDetails/StockQuoteDetails";

const getQuote = async (symbol: string) => {
  return {}; // prevent fetch because of the daily limit
  const targetUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`;

  console.log(targetUrl);

  const res = await fetch(targetUrl, {
    cache: "no-store",
  });

  return res.json();
};

interface DetailsPageProps {
  params: { stockId: string };
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const quote: GlobalQuote = await getQuote(params.stockId);
  console.log(quote);

  const formattedQuote: FormattedGlobalQuote = {
    symbol: quote["Global Quote"]?.["01. symbol"] || "",
    open: quote["Global Quote"]?.["02. open"] || "",
    high: quote["Global Quote"]?.["03. high"] || "",
    low: quote["Global Quote"]?.["04. low"] || "",
    price: quote["Global Quote"]?.["05. price"] || "",
    volume: quote["Global Quote"]?.["06. volume"] || "",
    latestTradingDay: quote["Global Quote"]?.["07. latest trading day"] || "",
    previousClose: quote["Global Quote"]?.["08. previous close"] || "",
    change: quote["Global Quote"]?.["09. change"] || "",
    changePercent: quote["Global Quote"]?.["10. change percent"] || "",
  };

  console.log(formattedQuote);

  return <StockQuoteDetails quote={formattedQuote} />;
};

export async function generateMetadata({ params }: DetailsPageProps) {
  return {
    title: "Stock Search App - Details View",
    description: "View the details of " + params.stockId + " stock",
  };
}

export default DetailsPage;
