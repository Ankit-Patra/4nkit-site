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
        }, 800);
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
            await new Promise((r) => setTimeout(r, 400));
            await typeLine(line2El, text2, 25);
            actionsEl.classList.remove("hidden");
        }
        sequence();
    }

    // --- 3. SCROLL SPY ---
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");
                    updateNav(id);
                }
            });
        },
        {
            rootMargin: "-30% 0px -70% 0px",
            threshold: 0,
        }
    );

    sections.forEach((s) => observer.observe(s));

    function updateNav(id) {
        navLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add("active");
    }

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

    // --- 5. CONTACT STUB ---
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const status = document.getElementById("status-msg");
            status.classList.remove("hidden");
            status.textContent = "> Packet queued in LocalStorage.";
            setTimeout(() => status.classList.add("hidden"), 4000);
            form.reset();
        });
    }
});
