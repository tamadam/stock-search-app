"use client";

import styles from "./SaveButton.module.css";

const SaveButton = () => {
  return (
    <div
      className={styles.cardSaveButton}
      onClick={() => console.log("save...")}
    >
      Save
    </div>
  );
};

export default SaveButton;
