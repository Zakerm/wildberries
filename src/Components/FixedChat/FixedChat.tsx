import React, { useState, useEffect } from "react";
import styles from "./FixedChat.module.css";

function FixedChat() {
  return (
    <div className={`${styles.fixed_block}`}>
      <button
        className={`${styles.fixed_block__chat} ${styles.btn_chat}`}
        type="button"
        aria-label="Онлайн чат"
      ></button>
    </div>
  );
}

export default FixedChat;
