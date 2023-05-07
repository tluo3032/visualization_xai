import {countries} from "@/CountryData";
import React, {useEffect, useState} from "react";
import styles from "./CountrySelectList.module.css";
import JuxtaposedComparison from "@/components/JuxtaposedComparison";

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
                <button onClick={()=>handleChooseAgain()} className={styles.backButton} disabled={selectedCountries.length!=2}>
                    Reset
                </button>
            </div>
            <div className={styles.columnright}>
                <div>
                    <p className={styles.task}>Your task<br></br>blabla</p>
                </div>
                <div className={styles.figure}>
                {selectedCountries.length==2 &&<JuxtaposedComparison country1={selectedCountries[0]} country2={selectedCountries[1]}/>}
                </div>
            </div>
        </div>
    )
}