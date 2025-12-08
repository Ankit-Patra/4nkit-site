import SectionHeader from "../ui/SectionHeader";

const Education = () => (
    <section id="education" className="container reveal">
        <SectionHeader title="cat /var/log/education" />
        <div className="log-entry">
            <div className="log-header">
                <span className="timestamp">[2021-2025]</span>
                <span className="status-code success">STATUS: COMPLETED</span>
            </div>
            <div className="log-body">
                <h3 className="highlight-white">
                    SRM Institute of Science and Technology
                </h3>
                <p>{">"} B.Tech in Computer Science and Engineering</p>
                <p>
                    {">"} Final Score (CGPA):{" "}
                    <span className="neon-text">9.13 / 10.0</span>
                </p>
                <p className="comment">
                    // Graduation successful. Ready for deployment.
                </p>
            </div>
        </div>
    </section>
);
export default Education;
