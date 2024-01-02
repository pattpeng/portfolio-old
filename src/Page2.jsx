import { useEffect } from "react";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";


function Page2() {

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
    gsap.to(".exp1", {
        duration: 1,
        x: 200,
        scrollTrigger: {
            trigger: ".exp1",
            start: "top center",
            end: "bottom 100px",
            markers: true,
        },
    });
}, []);


return (
    <>
        <div className="content-section2">
            <div className="content-section2-inner">
                <div className="content-section2-left">
                    <p>
                        I have always been fascinated by technology since my time in architecture school. I love studying new software and implementing them into my designs. From parametric form generation to building energy calculation, a field not dissimilar to coding. 
                        <br/>
                        <br/>
                        I was fortunate to be hired by a tech company as an in-house artist, which introduced me to the world of web development. From UX/UI to virtual experience, I picked up CSS, JavaScript, React, and many other amazing libraries to assist my small team. 
                        <br/>
                        <br/>
                        To better understand all the moving parts, I eventually had to start studying from scratch I took off with the Odin project beginning with Linux Shell CLI. And the rest is history.
                    </p>
                <div className="exp1">
                        <p>2014 - 2020</p> <p>Architecture</p>
                </div>
                <div className="exp2">
                    <p>2020 - Present</p><p>Web development</p>
                </div>
                </div>
                <div className="content-section2-right">
                </div>
            </div>
        </div>
    </>
)
}

export default Page2;
