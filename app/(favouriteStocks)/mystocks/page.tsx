import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import MyStocksList from "./components/MyStocksList/MyStocksList";
import authOptions from "@/app/utils/authOptions";

const FavouriteStocksPage = async () => {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const stocks = await prisma.stock.findMany({
    where: {
      userId,
    },
  });

  return <MyStocksList stocks={stocks} />;
};

export default FavouriteStocksPage;
