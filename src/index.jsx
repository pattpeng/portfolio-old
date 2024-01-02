import './style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Navbar';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const root = ReactDOM.createRoot(document.querySelector('#root'));



root.render(
    <>
    <div className="landing-frame">
        <Navbar/>
        <div className="content">
            <div className="fake-navbar"></div>
            {/* <Page1/> */}
            <Page2/>
            <Page3/>
            <div className="content-section4">
            </div>
        </div>
        
    </div>
   </>
)
