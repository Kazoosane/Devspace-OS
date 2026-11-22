import {
  MapPin,
  GraduationCap,
  Code2,
  Terminal,
} from "lucide-react";

const techStack = [
  "PHP",
  "Laravel",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "React",
];

export default function AboutMe() {
  return (
    <div className="about-container">
      {/* Profile */}
      <section className="about-profile">
        <div className="profile-avatar">
          <Code2 size={32} />
        </div>

        <div>
          <p className="profile-label">HELLO, WORLD! 👋</p>
          <h1>I'm Hadi Sumanjaya</h1>
          <p className="profile-role">
            Backend Developer Enthusiast
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="about-section">
        <h2>About Me</h2>

        <p>
          I'm a software development student who enjoys
          building applications and exploring backend
          technologies.
        </p>

        <p>
          Currently focusing on backend development,
          REST APIs, database management, and software
          architecture.
        </p>
      </section>

      {/* Information */}
      <section className="about-info">
        <div className="info-item">
          <GraduationCap size={18} />
          <span>Software Development Student</span>
        </div>

        <div className="info-item">
          <MapPin size={18} />
          <span>Jakarta, Indonesia</span>
        </div>

        <div className="info-item">
          <Terminal size={18} />
          <span>Backend Development</span>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="about-section">
        <h2>Technologies</h2>

        <div className="tech-list">
          {techStack.map((tech) => (
            <span className="tech-badge" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="about-section">
        <h2>Find Me</h2>

        <div className="social-links">
          <a href="https://github.com/Kazoosane" target="_blank">
            GitHub
          </a>

          <a href="https://instagram.com/" target="_blank">
            Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
