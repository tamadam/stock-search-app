<p>This Next.js application enables users to search for stock quotes and access related data through the Alphavantage public data source. The application operates using a free API key with a <b>daily limit of 25 calls</b>.</p>
<p>The application is currently accessible via the following URL: https://stock-search-app-rho.vercel.app/</p>

## Key features
<p><b>Search-As-You-Type:</b> Utilizing a technique called <b>debounce</b>, the search functionality begins working as you type, with a 500ms delay. This approach helps eliminate unnecessary API calls triggered by every keypress, ensuring efficient and responsive search functionality.</p>
<img src="https://github.com/tamadam/stock-search-app/assets/60942087/b91d8e8b-4dcd-4157-8899-8b788415e7a4" alt="stock search">


<p><b>Save Your Favorite Stocks:</b> Users can log in to the application using their Google account. Once logged in, they have the ability to save their favorite stocks. This feature eliminates the need to repeatedly search for the same stocks, providing convenience and time-saving benefits.</p>
<img src="https://github.com/tamadam/stock-search-app/assets/60942087/a92bdcc5-db37-4bc2-bd3e-af971ad2ff59" alt="favourite stocks page" />

<p><b>View Stock Details:</b> Users can access comprehensive information about the company, including stock quotes. Additionally, they have the option to examine graphs depicting total revenue and net income over past years.</p>
<img src="https://github.com/tamadam/stock-search-app/assets/60942087/057ec10d-749d-42fa-81f0-cf95e844148e" alt="stock details" />

## Running the Program in Development

To run the program in development, you'll need to configure a <b>GoogleProvider</b> for authentication, obtain an <b>API key from Alphavantage</b>, and set up a Postgres database, for example, using <b>Supabase</b>. Once you've completed these steps, create a .env file and include the following variables:
```
DATABASE_URL=
NEXTAUTH_URL=
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

Additionally, create a .env.local file for the API key:
```
ALPHAVANTAGE_API_KEY=
```

Then, start the development server:

```bash
npm run dev
```


