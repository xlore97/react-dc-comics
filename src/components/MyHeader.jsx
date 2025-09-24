import "./MyHeader.css";
import dcLogo from "../assets/dc-logo.png";

const MyHeader = () => {
    return (
        <header className="dc-header">
            <div className="wrap">
                <img className="logo" src={dcLogo} alt="DC Logo" />

                <nav>
                    <ul className="nav">
                        <li><a href="#">CHARACTERS</a></li>
                        <li><a href="#" className="active">COMICS</a></li>
                        <li><a href="#">MOVIES</a></li>
                        <li><a href="#">TV</a></li>
                        <li><a href="#">GAMES</a></li>
                        <li><a href="#">COLLECTIBLES</a></li>
                        <li><a href="#">VIDEOS</a></li>
                        <li><a href="#">FANS</a></li>
                        <li><a href="#">NEWS</a></li>
                        <li><a href="#">SHOP</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default MyHeader;
