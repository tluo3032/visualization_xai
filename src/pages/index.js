import styles from './index.module.css';
import React from "react";
import {testCountryData} from '../TestCountryData';
import BarChartCountry from "@/chartComponents/BarChartCountry";
import label from '@/components/label.png';
import Image from "next/image";

export default function Index() {
    const countries=testCountryData;
    const handleClickButton=()=>{
        window.location.href='/visualization1';
    }
  return (
      <div className={styles.body}>
        <h1>Which country has higher happiness rank?</h1>
          <div className={styles.chartcontainer}>
              <div>
                  <Image src={label} className={styles.annotation}/>
              </div>
                <div className={styles.group}>
                    <h2>Group 1</h2>
                    country A
                    <div className={styles.country}>
                        <BarChartCountry sorting={false} country={testCountryData[0]} hoverBlock={null}
                                         setHoverBlock={() => {}}/>
                    </div>
                    country B
                    <div className={styles.country}>
                        <BarChartCountry sorting={false} country={testCountryData[1]} hoverBlock={null}
                                         setHoverBlock={()=>{}}/>
                    </div>
                </div>
                <div className={styles.group}>
                    <h2>Group 2</h2>
                    country C
                    <div className={styles.country}>
                        <BarChartCountry sorting={false} country={testCountryData[3]} hoverBlock={null}
                                         setHoverBlock={() => {}}/>
                    </div>
                    country D
                    <div className={styles.country}>
                        <BarChartCountry sorting={false} country={testCountryData[2]} hoverBlock={null}
                                         setHoverBlock={()=>{}}/>
                    </div>
                </div>
                <div className={styles.group}>
                    <h2>Group 3</h2>
                    country E
                    <div className={styles.country}>
                        <BarChartCountry sorting={false} country={testCountryData[4]} hoverBlock={null}
                                         setHoverBlock={() => {}}/>
                    </div>
                    country F
                    <div className={styles.country}>
                        <BarChartCountry sorting={false} country={testCountryData[5]} hoverBlock={null}
                                         setHoverBlock={()=>{}}/>
                    </div>
                </div>
          </div>
          <div>
              <button onClick={()=>handleClickButton()} className={styles.backButton}>Next</button>
          </div>
      </div>
  );
}
