import SectionHeader from "../ui/SectionHeader";
import { SKILLS } from "../../data/constants";

const Skills = () => (
    <section id="skills" className="container reveal">
        <SectionHeader title="./check_modules.py" />
        <div className="skills-wrapper">
            {SKILLS.map((cat, idx) => (
                <div key={idx} className="skill-category">
                    <h3>// {cat.category}</h3>
                    <div className="skills-grid">
                        {cat.items.map((skill) => (
                            <div key={skill} className="skill-item">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </section>
);
export default Skills;
