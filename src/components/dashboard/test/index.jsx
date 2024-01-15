"use client"

import React from "react";
import styles from "./index.module.scss";
const Test = () => {
    const handleClick = () => {
      alert("hello")
    }
    
	return <div className={styles.testComp}>
        
      <button onClick={handleClick}>Click me</button>
    </div>;
};

export default Test;
