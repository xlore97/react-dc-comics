const navItems = [
    { label: "CHARACTERS", href: "#" },
    { label: "COMICS", href: "#", active: true },
    { label: "MOVIES", href: "#" },
    { label: "TV", href: "#" },
    { label: "GAMES", href: "#" },
    { label: "COLLECTIBLES", href: "#" },
    { label: "VIDEOS", href: "#" },
    { label: "FANS", href: "#" },
    { label: "NEWS", href: "#" },
    { label: "SHOP", href: "#" },
];

const MyNavbar = () => {
    return (
        <nav>
            <ul className="nav">
                {navItems.map((item, idx) => (
                    <li key={idx}>
                        <a
                            href={item.href}
                            className={item.active ? "active" : ""}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default MyNavbar;
