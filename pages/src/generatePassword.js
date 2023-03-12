import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const generatePassword = () => {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!@#$%&*()?";

  const generateAlphbets = () => {
    const alpha = Math.floor(Math.random() * alphabets.length);
    const alph = alphabets[alpha];
    return alph;
  };

  const generateNumbers = () => {
    const numbs = Math.floor(Math.random() * numbers.length);
    const numb = numbers[numbs];
    return numb;
  };

  const generateSymbols = () => {
    const symbol = Math.floor(Math.random() * symbols.length);
    const symb = symbols[symbol];
    return symb;
  };

  const generatePass = () => {
    let password = [];

    return password;
  };

  return (
    <>
      <button className={styles.backButton}>
        <Link href="/">Back</Link>
      </button>
      <main className={styles.maindiv2}>
        <div className={styles.passwordfield}>
          <h1 className={styles.headtext2}>Password Generator</h1>
          <div id="displayPassword" className={styles.copySpan}>
            <span className={styles.copySpan1}>
              <button id="copyButton" className={styles.copyBtn}>
                copy
              </button>
            </span>
          </div>
        </div>
        <div className={styles.checklist}>
          <div className={styles.individualDiv}>
            <label>password length</label>
            <input
              className={styles.inputNum}
              id="inputNum"
              type={"number"}
              min={"10"}
              max={"30"}
            />
          </div>
          <div className={styles.individualDiv}>
            <label htmlFor="alphabet">Alphabets</label>
            <input id="alphabet" type={"checkbox"} />
          </div>
          <div className={styles.individualDiv}>
            <label htmlFor="number">Numbers</label>
            <input id="number" type={"checkbox"} />
          </div>
          <div className={styles.individualDiv}>
            <label htmlFor="symbol">Symbols</label>
            <input id="symbol" type={"checkbox"} />
          </div>
          <button className={styles.generateBtn}>Generate Password</button>
        </div>
      </main>
    </>
  );
};

export default generatePassword;
