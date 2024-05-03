import { FormattedStockQuote } from "@/app/types";

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
          </div>
        );
      })}
    </div>
  );
};

export default StockQuoteResults;
