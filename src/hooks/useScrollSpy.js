import { useEffect, useState } from "react";

export const useScrollSpy = (isBooting) => {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        if (isBooting) return;

        // 1. Reveal Animation Observer with Direction Detection
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Logic: Check bounding client rect to see if entering from top or bottom
                        // If 'top' is negative or very small, it's near the top edge (Scrolling UP)
                        // If 'top' is positive and large, it's near the bottom edge (Scrolling DOWN)

                        const isComingFromTop =
                            entry.boundingClientRect.top <
                            window.innerHeight / 2;

                        if (isComingFromTop) {
                            entry.target.classList.remove("from-bottom");
                            entry.target.classList.add("from-top");
                        } else {
                            entry.target.classList.remove("from-top");
                            entry.target.classList.add("from-bottom");
                        }

                        // Force a small reflow/delay to ensure the browser registers the
                        // starting position class before adding the active class
                        requestAnimationFrame(() => {
                            entry.target.classList.add("active");
                        });
                    } else {
                        entry.target.classList.remove("active");
                    }
                });
            },
            {
                threshold: 0.15,
                // Optional: expand margin slightly to catch fast scrolls better
                rootMargin: "0px 0px -50px 0px",
            }
        );

        document
            .querySelectorAll(".reveal")
            .forEach((el) => revealObserver.observe(el));

        // 2. Navigation Highlighting Observer
        const navObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-50% 0px -50% 0px" }
        );

        document
            .querySelectorAll("section")
            .forEach((el) => navObserver.observe(el));

        return () => {
            revealObserver.disconnect();
            navObserver.disconnect();
        };
    }, [isBooting]);

    return activeSection;
};
