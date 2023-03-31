import React, {useRef} from "react";
import styles from './Navbar.css'
import {useRouter} from "next/router";
import Link from "next/link";

const XAInavbar=()=>{
    const router = useRouter();
    const num = router.pathname.slice(-1);
    return(
       <div className="navbar">
           <div className="dropdown">
               <button className="dropbtn">Visualization Selection</button>
               <div className="dropdown-content">
                   <Link href="/visualization1">Visualization 1</Link>
                   <Link href="/visualization2">Visualization 2</Link>
                   <Link href="/visualization3">Visualization 3</Link>
                   <Link href="/visualization4">Visualization 4</Link>
               </div>
           </div>
           <a>Visualization {num}</a>
       </div>
    )
}

export default XAInavbar;