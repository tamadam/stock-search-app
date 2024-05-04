import { FormattedStockQuote } from "@/app/types";
import Link from "next/link";

interface StockQuoteResultsProps {
  quotes: FormattedStockQuote[];
}

const StockQuoteResults = ({ quotes }: StockQuoteResultsProps) => {
  //console.log(quotes);
  return (
    <div>
      {quotes.map((quote) => {
        return (
          <div key={quote.symbol}>
            {quote.symbol} {quote.name}
            <span style={{ display: "block" }}>
              Link: <Link href={`/${quote.symbol}`}>View details</Link>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default StockQuoteResults;
