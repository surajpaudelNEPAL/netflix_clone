import React,{useState,useEffect} from 'react';
import avatar from "./avatar.jpg";
import netflix_logo from "./netflix_logo.png";
import "./nav.css";


export default function Nav() {
    const[show,handleShow]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100)
            {
                handleShow(true);
            }
            else{
                handleShow(false);
            }});
            return ()=> {
                window.removeEventListener("scroll");
            }
        },[]);
    return (
        <div className={`nav ${show && "black_nav"}`}>
        <img src={netflix_logo}
        alt="netflix_logo"
        className="netflix_logo"/>
        <img src={avatar}
        alt="avatar_logo"
        className="avatar_logo"/>
            
        </div>
    )
}
