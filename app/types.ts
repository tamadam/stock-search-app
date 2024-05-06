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

export const ALPHAVANTAGE_API_KEY = process.env.ALPHAVANTAGE_API_KEY;