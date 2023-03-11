import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Password Manager</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/profile2.png" />
      </Head>
      <main className={styles.main}>
        <div>
          <img src='/martonyx.png' alt='martonyx.png' className={styles.icon}/>
          <button className={styles.connect}>connect your wallet</button>
        </div>
        <div className={styles.description}>
            <div className={styles.maindiv}>
              <div className={styles.inputdiv}>
                <input placeholder='input your password here' id='password' className={styles.inputpass} />
                <input placeholder='Give a name for the password' id='passwordname' className={styles.inputpass} />
              </div>
              <div className={styles.buttondiv}>
                <button className={styles.button}>Generate Password</button>
                <button className={styles.button}>Add Password</button>
                <button className={styles.button}>fetch Passwords</button>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
