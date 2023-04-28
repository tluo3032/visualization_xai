import {songs} from "@/CountryData";
import React, {useState} from "react";
import styles from "./SongSelectList.module.css";
import WaffleComparison from "@/pages/WaffleComparison";
import ButterflyChartSong from "@/chartComponents/ButterflyChartSong";
import notes from "public/notes.PNG";
import Image from "next/image";
import { Dropdown } from "@nextui-org/react";


export default function SongSelectList(){

    const [selectedSongs, setSelectedSongs]=useState([]);
    const [confirmSongs, setConfirmSongs]=useState(false);
    const [showNextButton,setShowNextButton]=useState(true);
    const [showChooseButton, setShowChooseButton]=useState(false);
    const [waffleChart,setWaffleChart]=useState(true);
    const [butterflyChart,setButterflyChart]=useState(false);

    const [selected, setSelected] = React.useState(new Set(["Waffle Chart"]));

    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );


    function handleChartSelect(value){
        if(value==='Waffle Chart'){
            setWaffleChart(true);
            setButterflyChart(false);
        }else{
            setWaffleChart(false);
            setButterflyChart(true);
        }
    }

    function handleSelectedSongs(song){
        setSelectedSongs([...selectedSongs,song]);
        console.log(selectedSongs);
    }

    function handleConfirmSongs(){
        setConfirmSongs(true);
        setShowNextButton(false);
        setShowChooseButton(true);
        console.log(confirmSongs);
    }

    function handleSelectAgain(){
        setConfirmSongs(false);
        setShowNextButton(true);
        setShowChooseButton(false);
        setSelectedSongs([]);

    }


    function CompareSongs({song1,song2}){
        return(
            <div>
                {confirmSongs === false &&
                    <div className={styles.songList}>
                        <div className={styles.songCard}>
                            {song1.name.substring(3)}
                            <img src={song1.image} className={styles.songImage}/>
                        </div>
                        <div className={styles.songCard}>
                            {song2.name.substring(3)}
                            <img src={song2.image} className={styles.songImage}/>
                        </div>
                    </div>
                }
                {confirmSongs === true && waffleChart === true &&
                    <div>
                        <WaffleComparison song1={song1} song2={song2}/>
                    </div>
                }

                {confirmSongs === true && butterflyChart === true &&
                    <div>
                        <ButterflyChartSong/>
                    </div>}
            </div>
        )
    }


    return(
        <div className={styles.main}>
            <div className={styles.listContainer}>
                {songs.map((song)=>
                    <div key={song.name} className={styles.listItem}>
                        <img src={song.image} className={styles.Image}/>
                        {song.name.substring(3)}
                        <button disabled={selectedSongs.includes(song) || selectedSongs.length===2}
                                onClick={()=>handleSelectedSongs(song)}
                        >
                            {selectedSongs.includes(song)?'Selected':'Select'}
                        </button>
                    </div>)
                }
            </div>

            {selectedSongs.length===2 && showChooseButton===true &&
                <div className={styles.dropdownbtn}>
                    <Dropdown>
                        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
                            {selectedValue}
                        </Dropdown.Button>
                        <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selected}
                            onSelectionChange={setSelected}
                            onAction={handleChartSelect}
                        >
                            <Dropdown.Item onAction={()=>handleChartSelect("Waffle Chart")}key="Waffle Chart">Waffle Chart</Dropdown.Item>
                            <Dropdown.Item onAction={()=>handleChartSelect("Butterfly Chart")}key="Butterfly Chart">Butterfly Chart</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>}
            {selectedSongs.length!=2 && <div>
                Now you can select TWO songs to compare
            </div>}

            <div>
                {selectedSongs.length===2 && (<CompareSongs song1={selectedSongs[0]} song2={selectedSongs[1]}/>)}
            </div>
            <div>
                <button onClick={handleConfirmSongs}
                        className={styles.selectButton}
                        style={{display:showNextButton?'':'none'}}
                        disabled={selectedSongs.length!=2}>
                    Next
                </button>
            </div>
            <div className={styles.annotation}>
                <button onClick={handleSelectAgain}
                        className={styles.selectButton}
                        style={{display:showChooseButton?'':'none'}}>
                    Choose again
                </button>
                {confirmSongs === true && <div>
                    <Image src={notes} alt="annotation" width={300}></Image>
                </div>}
            </div>
        </div>
    );
}