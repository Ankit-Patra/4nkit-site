import { useState } from "react";
import { useScrollSpy } from "./hooks/useScrollSpy";

// Layout
import BootScreen from "./components/layout/BootScreen";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Sections
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
    const [booting, setBooting] = useState(true);
    const activeSection = useScrollSpy(booting);

    return (
        <>
            {booting && <BootScreen onComplete={() => setBooting(false)} />}

            <div
                className={`app-container ${booting ? "hidden-initially" : ""}`}
                style={{ opacity: booting ? 0 : 1, transition: "opacity 0.5s" }}
            >
                <div className="scanlines"></div>
                <div className="vignette"></div>

                <Navbar activeSection={activeSection} />

                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Education />
                    <Experience />
                    <Projects />
                    <Contact />
                </main>

                <Footer />
            </div>
        </>
    );
}
export default App;
