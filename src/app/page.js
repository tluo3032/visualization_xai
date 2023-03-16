import { Inter } from 'next/font/google'
import styles from './page.module.css'
import XAInavbar from "@/components/Navbar";
import Head from "next/head";
import Sidebar  from "../components/Sidebar";
import WaffleChartSong1 from "../chartComponents/WaffleChartSong1"
import WaffleChartSong2 from "@/chartComponents/WaffleChartSong2";
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
      <div>
          <Head>
              <title>XAI visualization</title>
          </Head>
          <div>
              <div>
                  <XAInavbar/>
              </div>
                  <div>
                      <Sidebar/>
                  </div>
              <div>
                  <WaffleChartSong1/>
              </div>
              <div>
                  <WaffleChartSong2/>
              </div>
              <footer className={styles.footer}>
                  <p>2023 XAI for Rank Visualization</p>
              </footer>
          </div>
      </div>
  )
}
