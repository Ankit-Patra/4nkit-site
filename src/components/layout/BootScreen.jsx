import { useState, useEffect, useRef } from "react";
import { BOOT_MESSAGES } from "../../data/constants";

const BootScreen = ({ onComplete }) => {
    const [lines, setLines] = useState([]);
    const bottomRef = useRef(null);

    useEffect(() => {
        let currentIndex = 0;
        let isCancelled = false;

        const addLine = () => {
            if (isCancelled) return;
            if (currentIndex < BOOT_MESSAGES.length) {
                setLines((prev) => [...prev, BOOT_MESSAGES[currentIndex]]);
                currentIndex++;
                setTimeout(addLine, Math.random() * 150 + 50);
            } else {
                setTimeout(() => {
                    if (!isCancelled) onComplete();
                }, 500);
            }
        };

        addLine();
        return () => {
            isCancelled = true;
        };
    }, [onComplete]);

    // Auto-scroll
    useEffect(() => {
        if (bottomRef.current) {
            bottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [lines]);

    return (
        <div className="boot-overlay" id="boot-screen">
            <div className="boot-text">
                {lines.map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
                <div ref={bottomRef} />
            </div>
        </div>
    );
};
export default BootScreen;
