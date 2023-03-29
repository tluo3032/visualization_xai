import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../pageStyles/visualization1.module.css'
import XAInavbar from "@/components/Navbar";
import Head from "next/head";
import Sidebar  from "../components/Sidebar";
import chart from "../components/label.png";
import WaffleChartSong1 from "../chartComponents/WaffleChartSong1"
import WaffleChartSong2 from "@/chartComponents/WaffleChartSong2";
import WaffleChartSong3 from "@/chartComponents/WaffleChartSong3";
import WaffleChartSong4 from "@/chartComponents/WaffleChartSong4";
import WaffleChartSong5 from "@/chartComponents/WaffleChartSong5";
import WaffleChartSong6 from "@/chartComponents/WaffleChartSong6";
import WaffleChartSong7 from "@/chartComponents/WaffleChartSong7";
import WaffleChartSong8 from "@/chartComponents/WaffleChartSong8";
import WaffleChartSong9 from "@/chartComponents/WaffleChartSong9";
import WaffleChartSong10 from "@/chartComponents/WaffleChartSong10";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <h1>Welcome Page</h1>
}
