import { useState, useEffect } from "react";

export const useTypewriter = (lines, speeds = [40, 25], delay = 300) => {
    const [displayedLines, setDisplayedLines] = useState(lines.map(() => ""));
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        let isCancelled = false;

        const runSequence = async () => {
            for (let i = 0; i < lines.length; i++) {
                const text = lines[i];
                const speed = speeds[i] || 30;

                for (let j = 0; j <= text.length; j++) {
                    if (isCancelled) return;
                    setDisplayedLines((prev) => {
                        const newLines = [...prev];
                        newLines[i] = text.substring(0, j);
                        return newLines;
                    });
                    await new Promise((r) => setTimeout(r, speed));
                }

                if (i < lines.length - 1) {
                    await new Promise((r) => setTimeout(r, delay));
                }
            }
            await new Promise((r) => setTimeout(r, 1000));
            if (!isCancelled) setIsDone(true);
        };

        runSequence();
        return () => {
            isCancelled = true;
        };
    }, []);

    return { displayedLines, isDone };
};
