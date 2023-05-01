import {countries} from "@/CountryData";
import React, {useEffect, useState} from "react";
import styles from "./CountrySelectList.module.css";
import WaffleComparison from "@/components/WaffleComparison";
import ButterflyChartSong from "@/chartComponents/ButterflyChartSong";
import Image from "next/image";
import { Dropdown } from "@nextui-org/react";


export default function CountrySelectList(){
    const [selectedCountries, setSelectedCountries]=useState([]);
    function handleSelectedCountries(country,isSelected){
        if(isSelected){
        setSelectedCountries([...selectedCountries,country]);}
        else{
            setSelectedCountries(selectedCountries.filter(c=>c!==country));
        }
        console.log(selectedCountries);
    }

    function handleChooseAgain(){
        setSelectedCountries([]);
        document.querySelectorAll('input[type="checkbox"]').forEach(e=>e.checked=false);
        console.log(selectedCountries);
    }

    return(
        <div className={styles.body}>
            <div className={styles.columnleft}>
                {countries.map((country)=>
                    <div key={country.name} className={styles.listItem}>
                        {country.country}
                        <input type="checkbox"
                               onChange={e=>handleSelectedCountries(country,e.target.checked)}
                                disabled={selectedCountries.length>=2}>
                        </input>
                    </div>)
                }
                <button onClick={()=>handleChooseAgain()} className={styles.backButton}>
                    Choose Again
                </button>
            </div><div className={styles.columnright}>
            </div>
        </div>
    )
}