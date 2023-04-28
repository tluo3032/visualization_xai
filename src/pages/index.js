import { Inter } from 'next/font/google'
import styles from "@/pages/index.module.css";
import {countries} from "@/CountryData";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <h1>Welcome</h1>
  );
}
