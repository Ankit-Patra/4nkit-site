import SectionHeader from "../ui/SectionHeader";
import { EXPERIENCE } from "../../data/constants";

const Experience = () => (
    <section id="experience" className="container reveal">
        <SectionHeader title="git log --graph --oneline" />
        <div className="git-graph">
            {EXPERIENCE.map((exp, index) => (
                <div key={index}>
                    <div className="git-commit">
                        <div
                            className={`commit-marker ${
                                exp.isStart ? "start" : ""
                            }`}
                        ></div>
                        <div className="commit-content">
                            {exp.isStart ? (
                                <>
                                    <span className="hash">{exp.hash}</span>
                                    <span className="comment">
                                        // Career initialized...
                                    </span>
                                </>
                            ) : (
                                <>
                                    <div className="commit-meta">
                                        <span className="hash">{exp.hash}</span>
                                        <span className="time">{exp.time}</span>
                                    </div>
                                    <h3 className="highlight-white">
                                        {exp.company}
                                    </h3>
                                    <p className="role">Role: {exp.role}</p>
                                    <ul className="changelog">
                                        {exp.points.map((pt, i) => (
                                            <li key={i}>+ {pt}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </div>
                    {/* Add line connector if not last item */}
                    {index !== EXPERIENCE.length - 1 && (
                        <div className="git-line"></div>
                    )}
                </div>
            ))}
        </div>
    </section>
);
export default Experience;
