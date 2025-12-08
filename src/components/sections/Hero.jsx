import { useTypewriter } from "../../hooks/useTypewriter";

const Hero = () => {
    const { displayedLines, isDone } = useTypewriter([
        'printf("Hello, world!\\n");',
        "I'm a software developer who loves building tools, solving problems, and working close to the metal.",
    ]);

    return (
        <section id="home" className="hero-section">
            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="title">/bin/bash --login</span>
                </div>
                <div className="terminal-body large-text">
                    <div className="typewriter-area">
                        <p className="console-line">{displayedLines[0]}</p>
                        <h1 className="console-line highlight">
                            {displayedLines[1]}
                        </h1>
                        <span className="cursor-block">█</span>
                    </div>
                    <div className={`hero-actions ${isDone ? "visible" : ""}`}>
                        <br />
                        <p className="comment">// Select execution path:</p>
                        <div className="btn-group">
                            <a href="#projects" className="terminal-btn">
                                [ cd ./projects ]
                            </a>
                            <a href="#contact" className="terminal-btn outline">
                                [ ./contact_me ]
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Hero;
