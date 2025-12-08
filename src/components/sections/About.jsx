import SectionHeader from "../ui/SectionHeader";
import { SOCIALS } from "../../data/constants";

const About = () => (
    <section id="about" className="container reveal">
        <SectionHeader title="whoami" />
        <div className="about-grid">
            <div className="terminal-card profile-card">
                <div className="ascii-art">
                    {`   .----------------.
   | >_ root@4nkit  |
   |                |
   |   SYSTEM RDY   |
   |   [||||||||]   |
   |                |
   '----------------'
   |______|
   [  =============  ]`}
                </div>
                <div className="profile-stats">
                    <p>
                        USER: <span className="highlight-white">4nkit</span>
                    </p>
                    <p>
                        CLASS:{" "}
                        <span className="highlight-white">Full Stack Dev</span>
                    </p>
                    <p>
                        UPTIME: <span className="highlight-white">99.9%</span>
                    </p>
                </div>
            </div>
            <div className="terminal-block">
                <p>
                    System Status:{" "}
                    <span className="neon-text">OPERATIONAL</span>
                </p>
                <br />
                <p>
                    I am a software engineer focused on{" "}
                    <span className="highlight-white">
                        backend architecture
                    </span>{" "}
                    and scalable systems. I prefer clean code over complex
                    abstractions and terminal commands over GUIs.
                </p>
                <br />
                <p>
                    Current Objective: Building robust tools that automate the
                    boring stuff.
                </p>
                <br />
                <p className="comment">// Establish connection:</p>
                <div className="social-links">
                    <a
                        href={SOCIALS.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="social-btn"
                    >
                        [ LinkedIn ]
                    </a>
                    <a
                        href={SOCIALS.github}
                        target="_blank"
                        rel="noreferrer"
                        className="social-btn"
                    >
                        [ GitHub ]
                    </a>
                </div>
            </div>
        </div>
    </section>
);
export default About;
