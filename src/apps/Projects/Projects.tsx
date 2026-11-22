
import { useState } from "react";
import { FolderGit2, ArrowLeft, Code2, Layers3, ExternalLink } from "lucide-react";
import { projects, type Project } from "./projects.data";

type Category = "All" | "Web" | "API" | "Mobile";

export default function Projects() {
  const [category, setCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    return category === "All" || project.category === category;
  });

  return (
    <div className="projects-container">
      {selectedProject ? (
        <div className="project-detail">
          <button
            className="project-back"
            onClick={() => setSelectedProject(null)}
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>

          <div className="project-detail-icon">
            <FolderGit2 size={32} />
          </div>

          <span className="project-category">
            {selectedProject.category}
          </span>

          <h2>{selectedProject.name}</h2>
          <p>{selectedProject.description}</p>

          <div className="project-detail-section">
            <h3>
                <ExternalLink size={17} />
                URL
            </h3>

            <div className="project-tech-list">
                <span>
                    <a href={selectedProject.url} target="_blank">
                        {selectedProject.url}
                    </a>
                </span>
            </div>
          </div>

          <div className="project-detail-section">
            <h3>
              <Layers3 size={17} />
              Technologies
            </h3>

            <div className="project-tech-list">
              {selectedProject.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-detail-section">
            <h3>
              <Code2 size={17} />
              Project Status
            </h3>

            <span className={`project-status ${selectedProject.status === "In Progress" ? "progress" : "concept"}`}>
              {selectedProject.status}
            </span>
          </div>
        </div>
      ) : (
        <>
          <div className="projects-heading">
            <div>
              <span className="projects-eyebrow">
                MY WORKSPACE
              </span>
              <h2>Projects</h2>
              <p>
                Explore some of my projects and experiments.
              </p>
            </div>

            <div className="projects-count">
              <FolderGit2 size={20} />
              {projects.length} Projects
            </div>
          </div>

          <div className="projects-filters">
            {(["All", "Web", "API", "Mobile"] as Category[]).map(
              (item) => (
                <button
                  key={item}
                  className={category === item ? "active" : ""}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card-top">
                  <div className="project-card-icon">
                    <FolderGit2 size={22} />
                  </div>

                  <span className={`project-status ${project.status === "In Progress" ? "progress" : "concept"}`}>
                    {project.status}
                  </span>
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tech-list">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span>+{project.technologies.length - 3}</span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="projects-empty">
              No projects found in this category.
            </div>
          )}
        </>
      )}
    </div>
  );
}
