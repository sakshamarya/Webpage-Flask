import React, { useEffect, useState } from 'react'
import styles from './Body.module.css'

const axios = require('axios')

export default function Body() {

    const [quote,setQuote] = useState("");
    const [author,setAuthor] = useState("");

    function getQuote(){
        axios.get("http://localhost:5000/getQuotes").then((res) => {
            const finalString = res.data.split("#");
            setQuote(finalString[0]);
            setAuthor(finalString[1]);
        });
    }

    useEffect(() => {

        getQuote();

    },[]);

    
  return (
    <div className={styles.main}>
        <div className={styles.heading}>Quote</div>
        <div className={styles.body}>{quote}</div>
        <div className={styles.heading}>Author</div>
        <div className={styles.body}>{author}</div>
    </div>
  )
}
