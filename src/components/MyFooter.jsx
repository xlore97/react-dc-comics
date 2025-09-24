import dcBigLogo from "../assets/dc-logo-bg.png";
import icoFacebook from "../assets/footer-facebook.png";
import icoTwitter from "../assets/footer-twitter.png";
import icoYouTube from "../assets/footer-youtube.png";
import icoPinterest from "../assets/footer-pinterest.png";
import "./MyFooter.css";

const MyFooter = () => {
    return (
        <footer className="footer">
            <img className="footer-big-logo" src={dcBigLogo} alt="" aria-hidden="true" />

            <div className="container footer-cols">
                <div className="col">
                    <h4>DC COMICS</h4>
                    <ul>
                        <li><a href="#">Characters</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">News</a></li>
                    </ul>

                    <h4>SHOP</h4>
                    <ul>
                        <li><a href="#">Shop DC</a></li>
                        <li><a href="#">Shop DC Collectibles</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h4>DC</h4>
                    <ul>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy (New)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="col">
                    <h4>SITES</h4>
                    <ul>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>
            </div>

            <section className="footer-bottom">
                <div className="container bottom-wrap">
                    <button className="signup-btn">SIGN-UP NOW!</button>

                    <div className="social">
                        <span className="follow">FOLLOW US</span>
                        <a href="#" aria-label="Facebook"><img src={icoFacebook} alt="" /></a>
                        <a href="#" aria-label="Twitter"><img src={icoTwitter} alt="" /></a>
                        <a href="#" aria-label="YouTube"><img src={icoYouTube} alt="" /></a>
                        <a href="#" aria-label="Pinterest"><img src={icoPinterest} alt="" /></a>
                    </div>
                </div>
            </section>
        </footer>
    );
};

export default MyFooter;
