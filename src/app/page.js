import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import XAInavbar from "@/components/Navbar";
import Head from "next/head";
import Sidebar  from "../components/Sidebar";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <div>
          <Head>
              <title>XAI visualization</title>
          </Head>
          <div>
              <div className={styles.main}>
                  <XAInavbar>
                  </XAInavbar>
              </div>
              <div>
                  <Sidebar>
                  </Sidebar>
              </div>
              <footer className={styles.footer}>
                  <p>2023 XAI for Rank Visualization</p>
              </footer>
          </div>
      </div>
  )
}
