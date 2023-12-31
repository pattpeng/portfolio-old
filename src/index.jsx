import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.jsx'
import Text from './Text.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    <div className="landing-frame">
        <div className="navbar">
            <div className="nav1"></div>
            <div className="nav2">
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
            </div>
            <div className="nav3"></div>  
        </div>
        <div className="content">
            <div className="fake-navbar"></div>
            <div className="content-section1">
                <div className="hello">
                    <h1>Hello</h1>
                    <h2>I’m a digital designer/ frontend developer based in Singapore specialized in visualization</h2>
                <div className="hello-icons-row">
                    <div className="hello-icon">
                        <img src="https://img.icons8.com/ios/50/000000/linkedin.png"/>
                    </div>
                    <div className="hello-icon">
                        <img src="https://img.icons8.com/ios/50/000000/github.png"/>
                    </div>
                    <div className="hello-icon">
                        <img src="https://img.icons8.com/ios/50/000000/behance.png"/>
                    </div>
                </div>
                </div>
                <div className="quotes">
                    <p>“I’m a digital designer /frontend developer based in Singapore specialized in visualization”</p>
                </div>
            </div>
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
            <div className="content-section3">
                <div className="content-section3-inner">
                    <div className="marquee"></div>
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
            </div>
            <div className="content-section4">
            </div>
        </div>
        
    </div>
   </>
)
