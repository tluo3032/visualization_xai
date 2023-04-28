import Visualization4 from "@/pages/visualization4";
import {songs} from "@/CountryData";
import BarChartSong from "@/chartComponents/BarChartSong";
import {useState} from "react";
import styles from "@/components/SongSelectList.module.css";

export default function WaffleComparison(props){
    const [hoverBlock, setHoverBlock] = useState(null);

    if(!props.song1 || !props.song2){
        return<div>
            Songs are undefined.
        </div>
    }
    return(
        <div className={styles.songList}>
            <div className={styles.songWaffleCard}>
                {props.song1.name}
                <BarChartSong sorting={false}
                              hoverBlock={hoverBlock}
                              setHoverBlock={() => {}}
                              song={props.song1}/>
            </div>
            <div className={styles.songWaffleCard}>
                {props.song2.name}
                <BarChartSong sorting={false}
                              hoverBlock={hoverBlock}
                              setHoverBlock={() => {}}
                              song={props.song2}/>
            </div>
        </div>
    )
}