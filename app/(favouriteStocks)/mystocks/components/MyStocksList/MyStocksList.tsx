import { Stock } from "@prisma/client";
import styles from "./MyStocksList.module.css";
import DeleteButton from "../DeleteButton/DeleteButton";
import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface MyStocksListProps {
  stocks: Stock[];
}

const MyStocksList = ({ stocks }: MyStocksListProps) => {
  return (
    <div className={styles.myStocksWrapper}>
      <div className={styles.myStocksTitleWrapper}>
        <span className={styles.goBack}>
          <Link href="/">
            <MdKeyboardArrowLeft size="1.4em" />
          </Link>
        </span>
        <span className={styles.myStocksTitle}>Favourite stocks</span>
      </div>

      {stocks.length === 0 ? (
        <div>It seems you haven&apos;t saved any favorite stocks yet.</div>
      ) : (
        <div className={styles.resultCards}>
          {stocks.map((stock) => {
            return (
              <div key={stock.symbol} className={styles.resultCard}>
                <div className={styles.cardTitle}>
                  <div className={styles.cardName}>
                    <h2>{stock.name}</h2>
                    <h4>{stock.symbol}</h4>
                  </div>
                  <div className={styles.cardCurrency}>{/* placeholder */}</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardDetail}>
                    <div className={styles.actionButtons}>
                      <DeleteButton stockId={stock.id} />
                      <div className={styles.cardDetailButton}>
                        <Link href={`/${stock.symbol}`}>View details</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyStocksList;
