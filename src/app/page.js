import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import XAInavbar from "@/components/Navbar";
import Head from "next/head";
import Sidebar  from "../components/Sidebar";
import chart from "../components/chart.jpg";

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
              <div className={styles.waffleContainer}>
                  <div>
                      <Sidebar/>
                  </div>
                  <div className={styles.wafflebox}>
                      <div>1</div>
                      <div>2</div>
                      <div>3</div>
                      <div>4</div>
                      <div>5</div>
                      <div>6</div>
                      <div>7</div>
                      <div>8</div>
                      <div>9</div>
                      <div>10</div>
                  </div>
                  <div>
                      <Image src={chart}
                             width={260}/>
                  </div>
              </div>
              <footer className={styles.footer}>
                  <p>2023 XAI for Rank Visualization</p>
              </footer>
          </div>
      </div>
  )
}
