import { useEffect, useState } from "react";

const Hero = () => {
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [showActions, setShowActions] = useState(false);

    const fullText1 = 'printf("Hello, world!\\n");';
    const fullText2 =
        "I'm a software developer who loves building tools, solving problems, and working close to the metal.";

    useEffect(() => {
        let isCancelled = false;

        const runSequence = async () => {
            // Type line 1
            for (let i = 0; i <= fullText1.length; i++) {
                if (isCancelled) return;
                setText1(fullText1.substring(0, i));
                await new Promise((r) => setTimeout(r, 40));
            }
            await new Promise((r) => setTimeout(r, 300));

            // Type line 2
            for (let i = 0; i <= fullText2.length; i++) {
                if (isCancelled) return;
                setText2(fullText2.substring(0, i));
                await new Promise((r) => setTimeout(r, 25));
            }

            await new Promise((r) => setTimeout(r, 1000));
            if (!isCancelled) setShowActions(true);
        };

        runSequence();
        return () => {
            isCancelled = true;
        };
    }, []);

    return (
        <section id="home" className="hero-section">
            <div className="terminal-window">
                <div className="terminal-header">
                    <span className="title">/bin/bash --login</span>
                </div>
                <div className="terminal-body large-text">
                    <div className="typewriter-area">
                        <p className="console-line">{text1}</p>
                        <h1 className="console-line highlight">{text2}</h1>
                        <span className="cursor-block">█</span>
                    </div>
                    <div
                        className={`hero-actions ${
                            showActions ? "visible" : ""
                        }`}
                    >
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
