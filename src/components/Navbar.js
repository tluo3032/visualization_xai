import React from "react";
import styles from './Navbar.css'
import {useRouter} from "next/router";
import Link from "next/link";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const XAInavbar=()=>{
    const router = useRouter();
    const num = router.pathname.slice(-1);
    return(
        <div className="navbar">
            <div className="dropdown">
                <div>
                {num==="1" && <button className="dropbtn">Visualization 1<KeyboardArrowDownIcon/></button>}
                {num==="2" && <button className="dropbtn">Visualization 2<KeyboardArrowDownIcon/></button>}
                {num==="3" && <button className="dropbtn">Visualization 3<KeyboardArrowDownIcon/></button>}
                {num==="4" && <button className="dropbtn">Visualization 4<KeyboardArrowDownIcon/></button>}
                </div>
                <div className="dropdown-content">
                    <Link href="/visualization1">Visualization 1</Link>
                    <Link href="/visualization2">Visualization 2</Link>
                    <Link href="/visualization3">Visualization 3</Link>
                    <Link href="/visualization4">Visualization 4</Link>
                </div>
            </div>
        </div>
    )
}

export default XAInavbar;