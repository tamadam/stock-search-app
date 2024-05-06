"use client";

import { useRouter } from "next/navigation";
import styles from "./DeleteButton.module.css";
import { useState } from "react";
import toast from "react-hot-toast";
import Spinner from "@/app/components/Spinner/Spinner";

interface DeleteButtonProps {
  stockId: string;
}

const DeleteButton = ({ stockId }: DeleteButtonProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClicked = async () => {
    try {
      setIsLoading(true);

      const requestUrl = `/api/stocks/${stockId}`;

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch(requestUrl, requestOptions);

      if (response.ok) {
        console.log(response);
        router.refresh();
        toast.success("Stock unsaved.");
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
      className={styles.cardDeleteButton}
      type="button"
      disabled={isLoading}
      onClick={handleButtonClicked}
    >
      <span>Unsave {isLoading && <Spinner />}</span>
    </button>
  );
};

export default DeleteButton;
