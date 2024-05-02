import Search from "./components/Search/Search";

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const searchQuery = searchParams["query"]?.[0] ?? "";

  console.log(searchQuery);

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-svh">
      <Search />
    </main>
  );
};

export default SearchPage;
