import { cvData } from "@/data/cvData";
import { SiPython, SiCplusplus, SiTypescript, SiDocker, SiLinux } from "react-icons/si";
import { FaAws } from "react-icons/fa";

const PREFIX = '';

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        padding: '1.25rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontWeight: 900, fontSize: '1.5rem', color: 'var(--accent-color)', letterSpacing: '-0.05em' }}>PS.</div>
          <div style={{ display: 'flex', gap: '2.5rem' }}>
            <a href="#about" style={{ color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>About</a>
            <a href="#research" style={{ color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Research</a>
            <a href="#experience" style={{ color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Experience</a>
            <a href="#projects" style={{ color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Projects</a>
            <a href="#gallery" style={{ color: 'var(--text-color)', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 600 }}>Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero container animate-fade-in" style={{
        background: "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)), url('/documents/chain_bckg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="hero-subtitle">Physics Researcher & Software Engineer</div>
        <h1>{cvData.name}</h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', marginTop: '1.5rem', color: '#475569' }}>
          Specializing in the rheology and mechanics of granular materials.
        </p>
        
        {/* Tech Stack Icons */}
        <div style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <SiPython size={40} color="#3776AB" />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>Python</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src={`${PREFIX}/documents/image.png`} alt="MATLAB" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>MATLAB</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <img src={`${PREFIX}/documents/lammps.png`} alt="LAMMPS" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>LAMMPS</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiCplusplus size={40} color="#00599C" />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>C++</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <SiDocker size={40} color="#2496ED" />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>Docker</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <FaAws size={40} color="#FF9900" />
            <div style={{ fontSize: '0.7rem', marginTop: '0.5rem', color: 'var(--text-muted)' }}>AWS</div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '3.5rem' }}>
          <a href="#research" className="btn btn-primary">View Research</a>
          <a href="/documents/CV.pdf" target="_blank" className="btn btn-outline">Download CV</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container">
        <h2>About Me</h2>
        <div className="grid" style={{ gridTemplateColumns: '2fr 1fr' }}>
          <div>
            <p>{cvData.summary}</p>
            <p>
              My work focuses on <strong>geometric cohesion</strong> and <strong>topology</strong> in non-equilibrium systems. 
              Beyond the lab, I've applied my technical expertise to full-stack engineering, 
              building high-scale health-tech applications.
            </p>
          </div>
          <div className="card">
            <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Education</h3>
            {cvData.education.map((edu, index) => (
              <div key={index} style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                {edu.school.includes("Indian Institute of Science") && (
                  <img src={`${PREFIX}/iisclogo.png`} alt="IISc Logo" style={{ width: '40px', height: '40px', flexShrink: 0, background: '#fff', padding: '4px', borderRadius: '4px', objectFit: 'contain' }} />
                )}
                <div>
                  <div style={{ fontWeight: 700, color: '#1e293b' }}>{edu.degree}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--accent-color)' }}>{edu.school}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{edu.period}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research / Publications Section */}
      <section id="research" className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h2 style={{ margin: 0 }}>Research & Publications</h2>
          <a href={cvData.googleScholar} target="_blank" className="btn btn-outline" style={{ fontSize: '0.85rem' }}>View Full Scholar Profile</a>
        </div>
        <div className="grid">
          {cvData.publications.map((pub, index) => (
            <div key={index} className="card">
              <div style={{ color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.5rem' }}>{pub.journal}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{pub.title}</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>{pub.authors}</p>
              {pub.link && (
                <a href={pub.link} target="_blank" className="btn btn-outline" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Read Publication</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {cvData.experience.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.period}</div>
              <h3 style={{ fontSize: '1.4rem', color: '#0f172a' }}>{exp.role}</h3>
              <div style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1rem' }}>{exp.company}</div>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                {exp.points.map((point, pIndex) => (
                  <li key={pIndex} style={{ marginBottom: '0.5rem' }}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container">
        <h2>Key Projects</h2>
        <div className="grid">
          {cvData.projects.map((project, index) => (
            <div key={index} className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '0.5rem' }}>{project.period}</div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem' }}>{project.description}</p>
              </div>
              {project.link && (
                <a href={project.link} target="_blank" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', marginTop: '1rem', display: 'inline-block' }}>View on GitHub →</a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="container">
        <h2>Moments</h2>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            <img src={`${PREFIX}/defense.jpg`} alt="Ph.D. Defense Completion" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Ph.D. Defense Completion</h3>
              <p style={{ fontSize: '0.85rem', margin: '0' }}>at the Indian Institute of Science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '6rem 0', textAlign: 'center', borderTop: '1px solid var(--card-border)', background: 'var(--pastel-blue)' }}>
        <div className="container">
          <h2 style={{ color: '#0f172a' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-color)' }}>Always open to discussing physics, software, or potential collaborations.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', marginTop: '3rem' }}>
            <a href={`mailto:${cvData.email}`} style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 700 }}>Email</a>
            <a href={cvData.linkedin} target="_blank" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 700 }}>LinkedIn</a>
            <a href={cvData.github} target="_blank" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 700 }}>GitHub</a>
            <a href={cvData.googleScholar} target="_blank" style={{ color: 'var(--accent-color)', textDecoration: 'none', fontWeight: 700 }}>Google Scholar</a>
          </div>
          <div style={{ marginTop: '5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} {cvData.name}.
          </div>
        </div>
      </footer>
    </main>
  );
}
