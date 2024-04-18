import React, {useState,useEffect} from 'react';
import "./Nav.css";
import { useNavigate } from 'react-router-dom';

function Nav() {
    const [show, handleShow]= useState(false);
    const navigate = useNavigate();

    const transitionNavBar =() => {
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll",transitionNavBar);
    },[]);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents'>
            <img 
                onClick={() => navigate("/")}
                className='nav__logo'
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                alt=""
            />

            <img 
                onClick={() => navigate("/profile")}
                className='nav__avatar'
                src='https://i.pinimg.com/originals/5b/50/e7/5b50e75d07c726d36f397f6359098f58.png' 
                alt='' 
            />
        </div>
    </div>
  )
}

export default Nav;