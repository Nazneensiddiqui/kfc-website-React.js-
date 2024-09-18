import "./footer.css";
import foot from "../public/img11.jpg";
import foot1 from "../public/img22.jpg";
import foot2 from "../public/img33.jpg";
import foot3 from "../public/img44.jpg";
import foot4 from "../public/logo.jpg";
import foot5 from "../public/download.jpeg";
import foot6 from "../public/app-store-badge.png";
import foot7 from "../public/google-play-badge.png";




const Footer = () => {
    return (
        <>
 <div className="footer">
                <div className="veiw">
                    <b><h2>Exclusive Offers for you</h2></b>
                    <p>View All Deals---</p>
                </div>

        <div className="images">
                 <div className="img" align="center">
                        <div className="pic">
                            <img src={foot} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                        </div>
                </div>
                <div className="img" align="center">
                        <div className="pic">
                            <img src={foot1} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                        </div>
                </div>
                <div className="img" align="center">
                        <div className="pic">
                            <img src={foot2} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                         </div>
                </div>
                <div className="img" align="center">
                        <div className="pic">
                            <img src={foot3} alt="" height={250} width={300} />
                            <h2>FREE VEG ZINGER ...</h2>
                            <p align="center">Free Veg Zinger on a cart value of 499 or<br />
                                more.Sunday only</p>
                            <div className="btn">
                                <b><p>Veiw Detail</p></b>
                                <button class="btn1"><b>Apply Offer</b></button>
                            </div>
                        </div>
                </div>
         </div>
                <div className="summry">
                    <img src={foot4} alt="" height={200} width={100}/>
                    <ul type="none">
                        <li>KFC India</li>
                        <li>About KFC</li>
                        <li>KFC Care</li>
                        <li>Careers</li>
                        <li>Our Golden Past</li>
                        <li>Responsible Disclosure</li>
                     </ul>

                     <ul type="none">
                        <li>Legal</li>
                        <li>Terms and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Caution Notice</li>
                        <li>Menu</li>
                     </ul>
                    <ul type="none">
                        <li>KFC Food</li>
                        <li>Menu</li>
                        <li>KOrder Lookup</li>
                        <li>Gift Card</li>
                        <li>Nutrition & Allergen</li>
                    </ul>

                    <ul type="none">
                        <li>Support</li>
                        <li>Get Help</li>
                        <li>Contact Us</li>
                        <li>GKFC Feedback</li>
                        <li>Privacy Policy</li>
                    </ul>
                   <p><img src={foot5} alt="" height={20} width={20}/><u>Find & KFC</u></p>
                   <img src={foot6} alt="" height={50} width={150}/>
                   <img src={foot7} alt="" height={50} width={150}/>

                </div>



 </div>

        </>
    )
}
export default Footer;