'use client';
import React from "react";
import styles from './Navbar.css'

const XAInavbar=()=>{

    return(
       <div className="navbar">
           <div className="dropdown">
               <button className="dropbtn">Visualization Selection</button>
               <div className="dropdown-content">
                   <a href="/visual1">Visualization 1</a>
                   <a href="/visual2">Visualization 2</a>
                   <a href="/visual3">Visualization 3</a>
                   <a href="/visual4">Visualization 4</a>
               </div>
           </div>
           <a>Visualization 1</a>
       </div>
    )
}

export default XAInavbar;