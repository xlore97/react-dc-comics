import dcBigLogo from "../assets/dc-logo-bg.png";
import "./MyFooter.css";
import MyFooterBottom from "./MyFooterBottom";

const footerCols = {
    comics: {
        title: "DC COMICS",
        links: [
            { label: "Characters", href: "#" },
            { label: "Comics", href: "#" },
            { label: "Movies", href: "#" },
            { label: "TV", href: "#" },
            { label: "Games", href: "#" },
            { label: "Videos", href: "#" },
            { label: "News", href: "#" },
        ],
    },
    shop: {
        title: "SHOP",
        links: [
            { label: "Shop DC", href: "#" },
            { label: "Shop DC Collectibles", href: "#" },
        ],
    },
    dc: {
        title: "DC",
        links: [
            { label: "Terms Of Use", href: "#" },
            { label: "Privacy Policy (New)", href: "#" },
            { label: "Ad Choices", href: "#" },
            { label: "Advertising", href: "#" },
            { label: "Jobs", href: "#" },
            { label: "Subscriptions", href: "#" },
            { label: "Talent Workshops", href: "#" },
            { label: "Ratings", href: "#" },
            { label: "Shop Help", href: "#" },
            { label: "Contact Us", href: "#" },
        ],
    },
    sites: {
        title: "SITES",
        links: [
            { label: "DC", href: "#" },
            { label: "MAD Magazine", href: "#" },
            { label: "DC Kids", href: "#" },
            { label: "DC Universe", href: "#" },
            { label: "DC Power Visa", href: "#" },
        ],
    },
};

const MyFooter = () => {
    return (
        <footer className="footer">
            <img
                className="footer-big-logo"
                src={dcBigLogo}
                alt=""
                aria-hidden="true"
            />

            <div className="container footer-cols">
                <div className="col">
                    <h4>{footerCols.comics.title}</h4>
                    <ul>
                        {footerCols.comics.links.map((link, i) => (
                            <li key={i}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>

                    <h4>{footerCols.shop.title}</h4>
                    <ul>
                        {footerCols.shop.links.map((link, i) => (
                            <li key={i}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col">
                    <h4>{footerCols.dc.title}</h4>
                    <ul>
                        {footerCols.dc.links.map((link, i) => (
                            <li key={i}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col">
                    <h4>{footerCols.sites.title}</h4>
                    <ul>
                        {footerCols.sites.links.map((link, i) => (
                            <li key={i}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <MyFooterBottom />
        </footer>
    );
};

export default MyFooter;
