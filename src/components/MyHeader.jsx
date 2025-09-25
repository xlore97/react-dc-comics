import "./MyHeader.css";
import dcLogo from "../assets/dc-logo.png";
import MyNavbar from "./MyNavbar";

const MyHeader = () => {
    return (
        <header className="dc-header">
            <div className="wrap">
                <img className="logo" src={dcLogo} alt="DC Logo" />
                <MyNavbar />
            </div>
        </header>
    );
};

export default MyHeader;
