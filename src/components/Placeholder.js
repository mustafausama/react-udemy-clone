import React from "react";
import styles from "./Placeholder.module.css";

const Placeholder = () => {
  return (
    <div className={styles.placeholder}>
      <div className={styles.image}></div>
      <div className={styles.title}></div>
      <div className={styles.author}></div>
      <div className={styles.rating}></div>
      <div className={styles.price}></div>
    </div>
  );
};

export default Placeholder;
