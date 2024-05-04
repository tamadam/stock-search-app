import { FormattedGlobalQuote } from "@/app/types";
import styles from "./StockQuoteDetails.module.css";

interface StockQuoteDetailsProps {
  quote: FormattedGlobalQuote;
}

const StockQuoteDetails = ({ quote }: StockQuoteDetailsProps) => {
  return (
    <div className={styles.quoteDetailsWrapper}>
      <div>Symbol: {quote.symbol}</div>
      <div>Open: {quote.open}</div>
      <div>High: {quote.high}</div>
      <div>Low: {quote.low}</div>
      <div>Price: {quote.price}</div>
      <div>Volume: {quote.volume}</div>
      <div>LatestTradingDay: {quote.latestTradingDay}</div>
      <div>PreviousClose: {quote.previousClose}</div>
      <div>Change: {quote.change}</div>
      <div>Change Percent: {quote.changePercent}</div>
    </div>
  );
};

export default StockQuoteDetails;
