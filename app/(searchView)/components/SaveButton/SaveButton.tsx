"use client";

import { useRouter } from "next/navigation";
import styles from "./SaveButton.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "@/app/components/Spinner/Spinner";

interface SaveButtonProps {
  name: string;
  symbol: string;
}

const SaveButton = ({ name, symbol }: SaveButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const saveToDatabase = async () => {
    try {
      setIsLoading(true);
      const stockData = {
        name,
        symbol,
      };

      const requestUrl = "/api/stocks";

      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(stockData),
      };

      const response = await fetch(requestUrl, requestOptions);

      if (response.ok) {
        console.log(response);
        router.refresh();
        toast.success("Stock saved.");
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      className={styles.cardSaveButton}
      type="button"
      disabled={isLoading}
      onClick={() => {
        console.log(saveToDatabase());
      }}
    >
      <span>Save {isLoading && <Spinner />} </span>
    </button>
  );
};

export default SaveButton;
