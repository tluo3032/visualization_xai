import BarChartCountry from "@/chartComponents/BarChartCountry";
import {useState} from "react";
import styles from "@/components/SongSelectList.module.css";

export default function JuxtaposedComparison(props){
    return(
        <div>
            <div>
                {props.country1.country}
                <BarChartCountry sorting={false}
                                 hoverBlock={null}
                                 setHoverBlock={() => {}}
                                 country={props.country1}/>
            </div>
            <div>
                {props.country2.country}
                <BarChartCountry sorting={false}
                                 hoverBlock={null}
                                 setHoverBlock={() => {}}
                                 country={props.country2}/>
            </div>
        </div>
    )
}