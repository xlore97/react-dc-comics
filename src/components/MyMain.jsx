import "./MyMain.css";
import Card from "./SubMain/Card";
import icoDigital from "../assets/buy-comics-digital-comics.png";
import icoMerch from "../assets/buy-comics-merchandise.png";
import icoSub from "../assets/buy-comics-subscriptions.png";
import icoLocator from "../assets/buy-comics-shop-locator.png";
import icoVisa from "../assets/buy-dc-power-visa.svg";
import heroImg from "../assets/jumbotron.jpg";

const blueItems = [
    { src: icoDigital, text: "DIGITAL COMICS" },
    { src: icoMerch, text: "DC MERCHANDISE" },
    { src: icoSub, text: "SUBSCRIPTION" },
    { src: icoLocator, text: "COMIC SHOP LOCATOR" },
    { src: icoVisa, text: "DC POWER VISA" },
];

const MyMain = () => {
    return (
        <main className="main">
            <section className="hero">
                <img src={heroImg} alt="DC Hero Banner" className="hero-img" />
            </section>

            <Card />

            <section className="blue">
                <div className="container">
                    <ul className="blue-list">
                        {blueItems.map((item, idx) => (
                            <li className="blue-item" key={idx}>
                                <img className="blue-ico" src={item.src} alt="" aria-hidden="true" />
                                <span className="blue-txt">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default MyMain;
