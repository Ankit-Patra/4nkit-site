document.addEventListener("DOMContentLoaded", () => {
    // --- 1. BOOT SEQUENCE ---
    const bootScreen = document.getElementById("boot-screen");
    const bootText = document.getElementById("boot-text");
    const mainContent = document.querySelector("main");
    const nav = document.querySelector(".terminal-nav");
    const footer = document.querySelector(".system-footer");

    const bootMessages = [
        "BIOS Date 01/01/24 15:23:00 Ver: 1.0.2",
        "CPU: Quantum Core i9, Speed: 9000MHz",
        "Memory Test: 64536K OK",
        "Loading Kernel...... OK",
        "Mounting File System...... OK",
        "Starting User Interface......",
        "Welcome, 4nkit.",
    ];

    async function runBootSequence() {
        for (let msg of bootMessages) {
            const p = document.createElement("div");
            p.textContent = msg;
            bootText.appendChild(p);
            await new Promise((r) => setTimeout(r, Math.random() * 150 + 50));
            bootScreen.scrollTop = bootScreen.scrollHeight;
        }
        await new Promise((r) => setTimeout(r, 400));

        bootScreen.style.opacity = "0";
        setTimeout(() => {
            bootScreen.style.display = "none";
            mainContent.style.opacity = "1";
            nav.style.opacity = "1";
            footer.style.opacity = "1";
            startTypewriter();
        }, 500);
    }
    runBootSequence();

    // --- 2. TYPEWRITER ---
    function startTypewriter() {
        const line1El = document.getElementById("line1");
        const line2El = document.getElementById("line2");
        const actionsEl = document.getElementById("hero-actions");

        const text1 = 'printf("Hello, world!\\n");';
        const text2 =
            "I'm a software developer who loves building tools, solving problems, and working close to the metal.";

        async function typeLine(el, text, speed) {
            el.textContent = "";
            for (let i = 0; i < text.length; i++) {
                el.textContent += text.charAt(i);
                await new Promise((r) => setTimeout(r, speed));
            }
        }
        async function sequence() {
            await typeLine(line1El, text1, 40);
            await new Promise((r) => setTimeout(r, 300));
            await typeLine(line2El, text2, 25);

            // 1. Wait for 1 second after typing finishes
            await new Promise((r) => setTimeout(r, 1000));

            // 2. Remove 'hidden' (if present) and add 'visible' to trigger CSS fade
            actionsEl.classList.remove("hidden");
            actionsEl.classList.add("visible");
        }
        sequence();
    }

    // --- 3. SCROLL REVEAL & NAV SPY (FIXED FOR UPWARD SCROLLING) ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const revealElements = document.querySelectorAll(".reveal");

    // 3a. Reveal Animation (Trigger when 15% visible)
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                    entry.target.classList.remove("active");
                }
            });
        },
        {
            threshold: 0.15,
        }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    const heroSection = document.getElementById("home");
    if (heroSection) revealObserver.observe(heroSection);

    // 3b. Nav Highlighting (The "Center Line" Fix)
    // We create a narrow "detection zone" in the middle of the screen.
    // Whatever section is in this middle zone is considered active.
    const navObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    updateNav(id);
                }
            });
        },
        {
            // This margin creates a 2px horizontal line in the exact center of the viewport
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0,
        }
    );

    sections.forEach((s) => navObserver.observe(s));

    function updateNav(id) {
        if (!id) return;
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
    }

    // 3c. Fallback: Bottom of Page Check
    // Ensures 'Contact' is highlighted if we hit the bottom but the section is short
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        if (scrollPosition >= pageHeight - 50) {
            updateNav("contact");
        }
    });

    // --- 4. MOBILE MENU ---
    const toggle = document.getElementById("mobile-toggle");
    const list = document.getElementById("nav-list");
    toggle.addEventListener("click", () => list.classList.toggle("open"));
    document
        .querySelectorAll(".nav-link")
        .forEach((l) =>
            l.addEventListener("click", () => list.classList.remove("open"))
        );

    // --- 5. CONTACT FORM (MAILTO & COPY LOGIC) ---
    const form = document.getElementById("contact-form");
    const copyBtn = document.getElementById("copy-btn");
    const statusMsg = document.getElementById("status-msg");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name || !email || !message) {
                statusMsg.textContent = "> Error: Fields cannot be empty.";
                statusMsg.style.color = "red";
                statusMsg.classList.remove("hidden");
                return;
            }

            const myEmail = "ankitpatra0123@gmail.com";
            const subject = `[Portfolio] Contact from ${name}`;
            const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

            window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;

            statusMsg.textContent = "> Opening default mail client...";
            statusMsg.style.color = "var(--accent)";
            statusMsg.classList.remove("hidden");

            setTimeout(() => statusMsg.classList.add("hidden"), 4000);
        });
    }

    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (!name && !email && !message) {
                statusMsg.textContent =
                    "> Error: Buffer empty. Nothing to copy.";
                statusMsg.style.color = "red";
                statusMsg.classList.remove("hidden");
                setTimeout(() => statusMsg.classList.add("hidden"), 3000);
                return;
            }

            const formattedText = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

            navigator.clipboard
                .writeText(formattedText)
                .then(() => {
                    const originalText = copyBtn.innerText;
                    copyBtn.innerText = "[ COPIED! ]";

                    statusMsg.textContent = "> Buffer copied to clipboard.";
                    statusMsg.style.color = "var(--accent)";
                    statusMsg.classList.remove("hidden");

                    setTimeout(() => {
                        copyBtn.innerText = originalText;
                        statusMsg.classList.add("hidden");
                    }, 3000);
                })
                .catch((err) => {
                    statusMsg.textContent = "> Error: Clipboard access denied.";
                    statusMsg.style.color = "red";
                });
        });
    }
});
