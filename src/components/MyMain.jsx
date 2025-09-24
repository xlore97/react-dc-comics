import "./MyMain.css";
import icoDigital from "../assets/buy-comics-digital-comics.png";
import icoMerch from "../assets/buy-comics-merchandise.png";
import icoSub from "../assets/buy-comics-subscriptions.png";
import icoLocator from "../assets/buy-comics-shop-locator.png";
import icoVisa from "../assets/buy-dc-power-visa.svg";

const MyMain = () => {
    return (
        <main className="main">
            <section className="hero">
                <div className="container">
                    <h2>--&gt; Content goes here &lt;--</h2>
                </div>
            </section>

            <section className="blue">
                <div className="container">
                    <ul className="blue-list">
                        <li className="blue-item">
                            <img className="blue-ico" src={icoDigital} alt="" aria-hidden="true" />
                            <span className="blue-txt">DIGITAL COMICS</span>
                        </li>
                        <li className="blue-item">
                            <img className="blue-ico" src={icoMerch} alt="" aria-hidden="true" />
                            <span className="blue-txt">DC MERCHANDISE</span>
                        </li>
                        <li className="blue-item">
                            <img className="blue-ico" src={icoSub} alt="" aria-hidden="true" />
                            <span className="blue-txt">SUBSCRIPTION</span>
                        </li>
                        <li className="blue-item">
                            <img className="blue-ico" src={icoLocator} alt="" aria-hidden="true" />
                            <span className="blue-txt">COMIC SHOP LOCATOR</span>
                        </li>
                        <li className="blue-item">
                            <img className="blue-ico" src={icoVisa} alt="" aria-hidden="true" />
                            <span className="blue-txt">DC POWER VISA</span>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default MyMain;
