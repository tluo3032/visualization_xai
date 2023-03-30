import React, {useRef} from "react";
import styles from './Navbar.css'
import {useRouter} from "next/router";

const XAInavbar=()=>{
    const router = useRouter();
    const num = router.pathname.slice(-1);
    return(
       <div className="navbar">
           <div className="dropdown">
               <button className="dropbtn">Visualization Selection</button>
               <div className="dropdown-content">
                   <a href="/visualization1">Visualization 1</a>
                   <a href="/visualization2">Visualization 2</a>
                   <a href="/visualization3">Visualization 3</a>
                   <a href="/visualization4">Visualization 4</a>
               </div>
           </div>
           <a>Visualization {num}</a>
       </div>
    )
}

export default XAInavbar;