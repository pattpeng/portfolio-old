
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

function Navbar() {

// const [activeSection, setActiveSection] = useState(null);

// useEffect(() => {
//     const sections = ['content-section1', 'content-section2', 'content-section3' , 'content-section4'];
  
//     sections.forEach((section) => {
//         gsap.to(window, {
//             scrollTrigger: {
//                 trigger: `.${section}`,
//                 start: 'top top',
//                 onEnter: () => setActiveSection(section),
//                 onLeaveBack: () => setActiveSection(null),
//             },
//         });
//     });
// }, []);


return (
    <>

    <div className="navbar">
            <div className="nav1"></div>
            <div className="nav2">
                {/* <div className={activeSection === 'content-section1' ? 'active' : 'inactive'}>Page1</div>
                <div className={activeSection === 'content-section2' ? 'active' : 'inactive'}>Page2</div>
                <div className={activeSection === 'content-section3' ? 'active' : 'inactive'}>Page3</div>
                <div className={activeSection === 'content-section4' ? 'active' : 'inactive'}>Page4</div> */}
            </div>
            <div className="nav3"></div>  
    </div>
    </>

);
}

export default Navbar;