import { fetchData } from "@/app/utils/fetchData";
import {
  ALPHAVANTAGE_API_KEY,
  AnnualReport,
  FormattedAnnualReports,
  FormattedCompanyOverview,
  FormattedGlobalQuote,
  GlobalQuote,
  StockAnnualReports,
} from "../../types";
import StockQuoteDetails from "../components/StockQuoteDetails/StockQuoteDetails";

const getQuote = async (symbol: string) => {
  const targetUrl = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHAVANTAGE_API_KEY}`;

  // console.log(targetUrl);

  return fetchData(targetUrl);
};

interface DetailsPageProps {
  params: { stockId: string };
}

const DetailsPage = async ({ params }: DetailsPageProps) => {
  //const quote: GlobalQuote = await getQuote(params.stockId);
  // console.log(quote);

  const quote = await fetchData(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo"
  );
  const companyData = await fetchData(
    "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo"
  );

  const income: StockAnnualReports = await fetchData(
    "https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo"
  );

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

  const formattedCompanyData: FormattedCompanyOverview = {
    symbol: companyData["Symbol"],
    assetType: companyData["AssetType"],
    name: companyData["Name"],
    description: companyData["Description"],
    currency: companyData["Currency"],
    country: companyData["Country"],
    sector: companyData["Sector"],
  };

  const formattedIncome: FormattedAnnualReports[] = income.annualReports.map(
    (annualReport: AnnualReport): FormattedAnnualReports => {
      return {
        fiscalDateEnding: annualReport.fiscalDateEnding,
        reportedCurrency: annualReport.reportedCurrency,
        costOfRevenue: annualReport.costOfRevenue,
        grossProfit: annualReport.grossProfit,
        netIncome: annualReport.netIncome,
        totalRevenue: annualReport.totalRevenue,
      };
    }
  );

  return (
    <StockQuoteDetails
      quote={formattedQuote}
      companyData={formattedCompanyData}
      incomeData={formattedIncome}
    />
  );
};

export async function generateMetadata({ params }: DetailsPageProps) {
  return {
    title: "Stock Search App - Details View",
    description: "View the details of " + params.stockId + " stock",
  };
}

export default DetailsPage;
