"use client";

import { useRouter } from "next/navigation";
import styles from "./SaveButton.module.css";
import toast from "react-hot-toast";
import { useState } from "react";
import Spinner from "@/app/components/Spinner/Spinner";

interface SaveButtonProps {
  name: string;
  symbol: string;
  saved: boolean;
}

const SaveButton = ({ name, symbol, saved }: SaveButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClicked = async () => {
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

  const buttonStyles = [styles.cardSaveButton, saved && styles.saved]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={buttonStyles}
      type="button"
      disabled={isLoading}
      onClick={!saved ? handleButtonClicked : () => {}}
    >
      <span>
        {saved ? "Saved" : "Save"} {isLoading && <Spinner />}{" "}
      </span>
    </button>
  );
};

export default SaveButton;
