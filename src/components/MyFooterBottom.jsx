import icoFacebook from "../assets/footer-facebook.png";
import icoTwitter from "../assets/footer-twitter.png";
import icoYouTube from "../assets/footer-youtube.png";
import icoPinterest from "../assets/footer-pinterest.png";

const socialLinks = [
    { href: "#", label: "Facebook", icon: icoFacebook },
    { href: "#", label: "Twitter", icon: icoTwitter },
    { href: "#", label: "YouTube", icon: icoYouTube },
    { href: "#", label: "Pinterest", icon: icoPinterest },
];

const MyFooterBottom = () => {
    return (
        <section className="footer-bottom">
            <div className="container bottom-wrap">
                <button className="signup-btn">SIGN-UP NOW!</button>

                <div className="social">
                    <span className="follow">FOLLOW US</span>
                    {socialLinks.map((s, idx) => (
                        <a key={idx} href={s.href} aria-label={s.label}>
                            <img src={s.icon} alt="" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MyFooterBottom;
