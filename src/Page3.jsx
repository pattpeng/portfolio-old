import vector3 from '/vector3.svg';
import vector1 from '/vector1.svg';
import vector2 from '/vector2.svg';
import { useEffect } from "react";
import gsap from 'gsap';

function Page3() {
    
    useEffect(() => {
        gsap.to(".waves1", { 
        duration: 22, 
        x: -5000,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        }); 
    }, []);

    useEffect(() => {
        gsap.to(".waves2", { 
        duration: 2, 
        scaleY: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "slow.inOut",
        }); 
    }, []);

    useEffect(() => {
        gsap.to(".waves3", { 
        duration: 3, 
        scaleY: 1.5,
        y: 20,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut",
        }); 
    }, []);

    useEffect(() => {
        gsap.to(".marqueeText", {
            x: -1000 ,
            repeat: -1,
            ease: "linear", 
            duration: 10, 
        });
    }, []);

return (
    <>
    <div className="content-section3">
            <div className="content-section3-inner">
                <div className="marquee">
                    <p className="marqueeText">
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    CHECK OUT MY DEMOS
                    </p>
                </div>
                <div className="grid-demo">
                    <div className="grid-items">Node Express</div>
                    <div className="grid-items">Bootstrap</div>
                    <div className="grid-items">Data Visualization</div>
                    <div className="grid-items"> </div>
                    <div className="grid-items"> </div>
                    <div className="grid-items"> </div>
                    <div className="grid-items"> </div>
                    <div className="grid-items"> </div>
                    <div className="grid-items"> </div>
                    <div className="grid-items"> </div>

                </div>
            </div>
            <div className="waves-container">
                <img src={vector3} className="waves3"/>
                <img src={vector2} className="waves2"/>
                <img src={vector1} className="waves1"/>
            </div>
        </div>
    </>
);
}

export default Page3;