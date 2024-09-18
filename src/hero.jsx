import "./hero.css";
import  webs from "../public/webs.webp"
const Hero = ()=>{
    return(
        <>
        <div className="hero">
            <b><p>LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN</p></b>
            <button>Start Order</button>
        </div>
        <img src={webs} alt=""/>

        </>
    )
}
export default Hero;