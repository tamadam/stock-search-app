import { FormattedStockQuote } from "@/app/types";
import Link from "next/link";
import styles from "./StockQuoteResults.module.css";

interface StockQuoteResultsProps {
  quotes: FormattedStockQuote[];
}

const StockQuoteResults = ({ quotes }: StockQuoteResultsProps) => {
  return (
    <div className={styles.resultsWrapper}>
      <h1 className={styles.resultsTitle}>Stock quotes</h1>
      <div className={styles.resultCards}>
        {quotes.map((quote) => {
          return (
            <div key={quote.symbol} className={styles.resultCard}>
              <div className={styles.cardTitle}>
                <div className={styles.cardName}>
                  <h2>{quote.name}</h2>
                  <h4>{quote.symbol}</h4>
                </div>
                <div className={styles.cardCurrency}>
                  <span>{quote.currency}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardDetail}>
                  <div className={styles.cardDetailItem}>
                    <span>Country:</span>
                    <span>{quote.region}</span>
                  </div>
                  <div className={styles.cardDetailItem}>
                    <span>Type:</span>
                    <span>{quote.type}</span>
                  </div>
                  <div className={styles.cardDetailItem}>
                    <span>Market open:</span>
                    <span>{quote.marketOpen}</span>
                  </div>
                  <div className={styles.cardDetailItem}>
                    <span>Market close:</span>
                    <span>{quote.marketClose}</span>
                  </div>
                  <div className={styles.cardDetailItem}>
                    <span>Timezone:</span>
                    <span>{quote.timezone}</span>
                  </div>
                  <div className={styles.cardDetailButton}>
                    <Link href={`/${quote.symbol}`}>View details</Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StockQuoteResults;