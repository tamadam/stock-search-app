import {
  FormattedAnnualReports,
  FormattedCompanyOverview,
  FormattedGlobalQuote,
} from "@/app/types";
import styles from "./StockQuoteDetails.module.css";
import Link from "next/link";
import Chart from "../Chart/Chart";

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
  const incomeChartData = incomeData
    .map((income) => {
      return {
        year: income.fiscalDateEnding.split("-")[0],
        total: Number(income.totalRevenue) / 10000000,
        net: Number(income.netIncome) / 10000000,
      };
    })
    .sort((a, b) => {
      return Number(a.year) - Number(b.year);
    });

  return (
    <>
      <div className={styles.quoteDetailsWrapper}>
        <div className={`${styles.quoteWrapper} ${styles.detailCard}`}>
          <h1 className={styles.sectionTitle}>Quote</h1>
          <div className={styles.sectionContent}>
            {quote ? (
              <>
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
              </>
            ) : (
              <div>No information available</div>
            )}
          </div>
        </div>
        <div className={`${styles.companyWrapper} ${styles.detailCard}`}>
          <h1 className={styles.sectionTitle}>Company</h1>
          <div className={styles.sectionContent}>
            {companyData.symbol ? (
              <>
                <div className={styles.companyName}>{companyData.name}</div>
                <div className={styles.companyInfo}>
                  <span>{companyData.country}</span>
                  <span>-</span>
                  <span>{companyData.sector}</span>
                </div>
                <div className={styles.companyDescription}>
                  {companyData.description}
                </div>
              </>
            ) : (
              <div>No information available</div>
            )}
          </div>
        </div>
        <div className={`${styles.incomeWrapper} ${styles.detailCard}`}>
          <h1 className={styles.sectionTitle}>
            Total Revenue & Net income (10M)
          </h1>
          <div className={styles.sectionContent}>
            {incomeData.length !== 0 ? (
              <>
                <Chart
                  incomeChartData={incomeChartData}
                  xKey="year"
                  lineKey="total"
                  description="Total revenue"
                />
                <Chart
                  incomeChartData={incomeChartData}
                  xKey="year"
                  lineKey="net"
                  description="Net income"
                />
              </>
            ) : (
              <div>No information available</div>
            )}

            {/*           {incomeData.map((income) => {
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
            })} */}
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
