import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

function GeneratePassword() {
  const [isAlphaaChecked, setAlphaaChecked] = useState(false);
  const [isAlphaChecked, setAlphaChecked] = useState(false);
  const [isNumChecked, setNumChecked] = useState(false);
  const [isSymbChecked, setSymbChecked] = useState(false);
  const [passwordEle, setPasswordEle] = useState("");
  const [numEl, setNumEl] = useState("10");
  const [isEditing, setIsEditing] = useState(false);

  const Alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const symbols = "!@#$%^&*(?/)";

  function GenerateAalphbets() {
    const alpha = Math.floor(Math.random() * alphabets.length);
    const alphaa = Alphabets[alpha];
    return alphaa;
  }

  function GenerateAlphbets() {
    const alpha = Math.floor(Math.random() * alphabets.length);
    const alph = alphabets[alpha];
    return alph;
  }

  function GenerateNumbers() {
    const numbs = Math.floor(Math.random() * numbers.length);
    const numb = numbers[numbs];
    return numb;
  }

  function GenerateSymbols() {
    const symbol = Math.floor(Math.random() * symbols.length);
    const symb = symbols[symbol];
    return symb;
  }

  function GeneralPassword() {
    let passwordlength = numEl;

    let genPassword = "";

    for (let i = 0; i < passwordlength; i++) {
      const x = GeneratePass();
      genPassword += x;
    }
    return setPasswordEle(genPassword);
  }

  function GeneratePass() {
    let xs = [];

    if (isAlphaChecked) {
      xs.push(GenerateAlphbets());
    }
    if (isNumChecked) {
      xs.push(GenerateNumbers());
    }
    if (isSymbChecked) {
      xs.push(GenerateSymbols());
    }
    if (isAlphaaChecked) {
      xs.push(GenerateAalphbets());
    }

    if (xs.length === 0) {
      return "";
    }

    return xs[Math.floor(Math.random() * xs.length)];
  }

  function HandleCopy() {
    let text = passwordEle;
    setIsEditing(true);
    navigator.clipboard.writeText(text);
    setIsEditing(false);
  }

  return (
    <>
      <button className={styles.backButton}>
        <Link href="/">Back</Link>
      </button>
      <div className={styles.directionDiv}>
        <h2>Direction</h2>
        <p>
          * The password length is your preferred length of password. (Ranges
          from 10 to 30 characters)
        </p>
        <p>
          * The checkboxes are to select your preferred password combinations
        </p>
      </div>
      <main className={styles.maindiv2}>
        <div className={styles.checklist}>
          <div className={styles.passwordfield}>
            <h1 className={styles.headtext2}>Password Generator</h1>
            {isEditing ? (
              <textarea value={passwordEle} />
            ) : (
              <div className={styles.copySpan}>
                {passwordEle}
                <button onClick={HandleCopy} className={styles.copyBtn}>
                  copy
                </button>
              </div>
            )}
          </div>
          <div className={styles.individualDiv}>
            <label>password length</label>
            <input
              className={styles.inputNum}
              id="inputNum"
              type={"number"}
              min={"10"}
              max={"30"}
              value={numEl}
              onChange={(e) => setNumEl(e.target.value)}
            />
          </div>
          <div className={styles.individualDiv}>
            <label htmlFor="aalphabet">Capital Alphabets</label>
            <input
              name="aalphabet"
              value={isAlphaaChecked}
              onChange={(e) => setAlphaaChecked(e.target.value)}
              type={"checkbox"}
            />
          </div>
          <div className={styles.individualDiv}>
            <label htmlFor="alphabet">small Alphabets</label>
            <input
              name="alphabet"
              value={isAlphaChecked}
              onChange={(e) => setAlphaChecked(e.target.value)}
              type={"checkbox"}
            />
          </div>
          <div className={styles.individualDiv}>
            <label htmlFor="number">Numbers</label>
            <input
              name="number"
              value={isNumChecked}
              onChange={(e) => setNumChecked(e.target.value)}
              type={"checkbox"}
            />
          </div>
          <div className={styles.individualDiv}>
            <label htmlFor="symbol">Symbols</label>
            <input
              name="symbol"
              value={isSymbChecked}
              onChange={(e) => setSymbChecked(e.target.value)}
              type={"checkbox"}
            />
          </div>
          <button className={styles.generateBtn} onClick={GeneralPassword}>
            Generate Password
          </button>
        </div>
      </main>
    </>
  );
}

export default GeneratePassword;
