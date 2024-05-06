import {
  FormattedAnnualReports,
  FormattedCompanyOverview,
  FormattedGlobalQuote,
} from "@/app/types";
import styles from "./StockQuoteDetails.module.css";
import Link from "next/link";

interface StockQuoteDetailsProps {
  quote: FormattedGlobalQuote;
  companyData: FormattedCompanyOverview;
  incomeData: FormattedAnnualReports[];
}

const StockQuoteDetails = ({
  quote,
  companyData,
  incomeData,
}: StockQuoteDetailsProps) => {
  return (
    <>
      <div className={styles.quoteDetailsWrapper}>
        <div className={`${styles.quoteWrapper} ${styles.detailCard}`}>
          <h1 className={styles.sectionTitle}>Quote</h1>
          <div className={styles.sectionContent}>
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
        </div>
        <div className={`${styles.companyWrapper} ${styles.detailCard}`}>
          <h1 className={styles.sectionTitle}>Company</h1>
          <div className={styles.sectionContent}>
            <div className={styles.companyName}>{companyData.name}</div>
            <div className={styles.companyInfo}>
              <span>{companyData.country}</span>
              <span>-</span>
              <span>{companyData.sector}</span>
            </div>
            <div className={styles.companyDescription}>
              {companyData.description}
            </div>
          </div>
        </div>
        <div className={`${styles.incomeWrapper} ${styles.detailCard}`}>
          <h1 className={styles.sectionTitle}>Income</h1>
          <div className={styles.sectionContent}>
            {incomeData.map((income) => {
              return (
                <div key={income.fiscalDateEnding}>
                  <h2 className={styles.incomeYear}>
                    {income.fiscalDateEnding}
                  </h2>
                  <div>
                    Gross Profit: {income.grossProfit} {income.reportedCurrency}
                  </div>
                  <div>
                    Net Income: {income.netIncome} {income.reportedCurrency}
                  </div>
                  <div>
                    Total Revenue{income.totalRevenue} {income.reportedCurrency}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.goBackWrapper} ${styles.detailCard}`}>
          <Link href="/">Go back to search</Link>
        </div>
      </div>
    </>
  );
};

export default StockQuoteDetails;
