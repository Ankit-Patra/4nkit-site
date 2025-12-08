import { useState } from "react";

const Navbar = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: "home", label: "./Home" },
        { id: "about", label: "./About" },
        { id: "skills", label: "./Skills" },
        { id: "education", label: "./Education" },
        { id: "experience", label: "./Experience" },
        { id: "projects", label: "./Projects" },
        { id: "contact", label: "./Contact" },
    ];

    return (
        <nav className="terminal-nav">
            <div className="brand">
                4nkit@dev:~$ <span className="blink-cursor">_</span>
            </div>
            <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                [ MENU ]
            </div>
            <ul id="nav-list" className={isOpen ? "open" : ""}>
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            className={`nav-link ${
                                activeSection === item.id ? "active" : ""
                            }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Navbar;
