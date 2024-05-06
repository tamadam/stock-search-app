export const ALPHAVANTAGE_API_KEY = process.env.ALPHAVANTAGE_API_KEY;

export type StockQuote = {
    bestMatches: [
        {
            "1. symbol": string;
            "2. name": string;
            "3. type": string;
            "4. region": string;
            "5. marketOpen": string;
            "6. marketClose": string;
            "7. timezone": string;
            "8. currency": string;
            "9. matchScore": string;
        },
    ],
};

export type FormattedStockQuote = {
    symbol: string;
    name: string;
    type: string;
    region: string;
    marketOpen: string;
    marketClose: string;
    timezone: string;
    currency: string;
    matchScore: string;
    saved: boolean;
};

export type GlobalQuote = {
    "Global Quote": {
        "01. symbol": string;
        "02. open": string;
        "03. high": string;
        "04. low": string;
        "05. price": string;
        "06. volume": string;
        "07. latest trading day": string;
        "08. previous close": string;
        "09. change": string;
        "10. change percent": string;
    },
};

export type FormattedGlobalQuote = {
    symbol: string;
    open: string;
    high: string;
    low: string;
    price: string;
    volume: string;
    latestTradingDay: string;
    previousClose: string;
    change: string;
    changePercent: string;
};

export type CompanyOverview = {
    "Symbol": string;
    "AssetType": string;
    "Name": string;
    "Description": string;
    "CIK": string;
    "Exchange": string;
    "Currency": string;
    "Country": string;
    "Sector": string;
    "Industry": string;
    "Address": string;
    "FiscalYearEnd": string;
    "LatestQuarter": string;
    "MarketCapitalization": string;
    "EBITDA": string;
    "PERatio": string;
    "PEGRatio": string;
    "BookValue": string;
    "DividendPerShare": string;
    "DividendYield": string;
    "EPS": string;
    "RevenuePerShareTTM": string;
    "ProfitMargin": string;
    "OperatingMarginTTM": string;
    "ReturnOnAssetsTTM": string;
    "ReturnOnEquityTTM": string;
    "RevenueTTM": string;
    "GrossProfitTTM": string;
    "DilutedEPSTTM": string;
    "QuarterlyEarningsGrowthYOY": string;
    "QuarterlyRevenueGrowthYOY": string;
    "AnalystTargetPrice": string;
    "AnalystRatingStrongBuy": string;
    "AnalystRatingBuy": string;
    "AnalystRatingHold": string;
    "AnalystRatingSell": string;
    "AnalystRatingStrongSell": string;
    "TrailingPE": string;
    "ForwardPE": string;
    "PriceToSalesRatioTTM": string;
    "PriceToBookRatio": string;
    "EVToRevenue": string;
    "EVToEBITDA": string;
    "Beta": string;
    "52WeekHigh": string;
    "52WeekLow": string;
    "50DayMovingAverage": string;
    "200DayMovingAverage": string;
    "SharesOutstanding": string;
    "DividendDate": string;
    "ExDividendDate": string;
}

export type FormattedCompanyOverview = {
    symbol: string;
    assetType: string;
    name: string;
    description: string;
    currency: string;
    country: string;
    sector: string;
}

export type AnnualReport = {
    fiscalDateEnding: string;
    reportedCurrency: string;
    grossProfit: string;
    totalRevenue: string;
    costOfRevenue: string;
    costofGoodsAndServicesSold: string;
    operatingIncome: string;
    sellingGeneralAndAdministrative: string;
    researchAndDevelopment: string;
    operatingExpenses: string;
    investmentIncomeNet: string;
    netInterestIncome: string;
    interestIncome: string;
    interestExpense: string;
    nonInterestIncome: string;
    otherNonOperatingIncome: string;
    depreciation: string;
    depreciationAndAmortization: string;
    incomeBeforeTax: string;
    incomeTaxExpense: string;
    interestAndDebtExpense: string;
    netIncomeFromContinuingOperations: string;
    comprehensiveIncomeNetOfTax: string;
    ebit: string;
    ebitda: string;
    netIncome: string;
};

export type StockAnnualReports = {
    symbol: string;
    annualReports: AnnualReport[];
};

export type FormattedAnnualReports = {
    fiscalDateEnding: string;
    reportedCurrency: string;
    grossProfit: string;
    totalRevenue: string;
    costOfRevenue: string;
    netIncome: string;
}
