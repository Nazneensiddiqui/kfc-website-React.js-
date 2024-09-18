import "./nav.css";
import image from "../public/download.png"
import image1 from "../public/images.jpeg"
const Nav = ()=>{
    return(
        <>
        <div className="nav">
            <p>Allow location access for local store menu and promos</p>
            <button>set Location</button>
        </div>
        <div className="parent">
            <div className="child">
            <img src={image} alt="" height={70} width={120}/>
            <b><p>Menu</p></b>
            <b><p>Deals</p></b>
        </div>
        <div className="child">
                 <b><p>@</p></b>
                <b><p>sign in</p></b>
                <b><p>Rs.0</p></b>
                <img src={image1} alt="" height={50} width={50}/>
                 </div>
         </div>
        </>
    )
}
export default Nav;



