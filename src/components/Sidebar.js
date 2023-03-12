import React from "react";
import styles from "./Sidebar.module.css";
import {SidebarData} from "@/components/SidebarData";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ol>
                {SidebarData.map((val, key) => {
                    // Need to finish onClick function
                    return <li key={key} class={styles.container}>
                        <img src={val.image} className={styles.picture} alt="image"></img>
                        <div className={styles.vertical}>
                            <div className={styles.title}>{val.name}</div>
                            <div className={styles.infoSinger}>{val.artist}</div>
                            <div className={styles.infoOther}>{val.genre}</div>
                            <div className={styles.infoOther}>{val.length}</div>
                        </div>

                    </li>;
                })}
            </ol>
        </div>
    );
}

export default Sidebar;