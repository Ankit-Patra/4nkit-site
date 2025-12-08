import SectionHeader from "../ui/SectionHeader";
import { PROJECTS } from "../../data/constants";

const ProjectItem = ({ p }) => (
    <div className="terminal-row">
        <div className="cmd-line">
            <span className="prompt-user">4nkit@dev:{p.path} $</span>
            <span className="cmd">{p.cmd}</span>
        </div>
        <div className="cmd-output">
            <h3 className="highlight-white">{p.title}</h3>
            <p>{p.desc}</p>
            <div className="tech-stack-inline">{p.stack}</div>
            <br />
            <a href={p.link} className="file-link">
                {">"} view_source_code
            </a>
        </div>
    </div>
);

const Projects = () => (
    <section id="projects" className="container reveal">
        <SectionHeader title="ls -l ~/projects/" />
        <div className="single-column-projects">
            {PROJECTS.map((p) => (
                <ProjectItem key={p.id} p={p} />
            ))}
        </div>
    </section>
);
export default Projects;
