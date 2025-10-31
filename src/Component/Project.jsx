import React from 'react'

function Project() {
  const projects = [
    {
      title: "Portfolio Website",
      team: "Solo Project",
      languages: "React, CSS, Bootstrap, JavaScript",
      github: "https://github.com/Onkar-os/portfolio.git"
    },
    {
       title: "3D-visuals Website",
      team: "Duo Project",
      languages: "React, CSS, Bootstrap, JavaScript",
      github: "https://github.com/Onkar-os/vite-react-template.git"
    },
    {
       title: "user authentication using springboot",
      team: "Solo Project",
      languages: "java, CSS, springboot, JavaScript, HTML, ",
      github: "https://github.com/Onkar-os/springboot-project.git"
    }
  ]
  return (
    <div className=" bg-black container py-5 bg-dark min-vh-100">
      <h2 className="text-center text-info mb-5 fw-bold">My Projects</h2>

      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card bg-secondary text-light shadow-lg border-0 h-100 hover-shadow">
              <div className="card-body">
                <h5 className="card-title text-info fw-bold">
                  {project.title}
                </h5>

                <p className="card-text mb-2">
                  <strong>👥 Team:</strong> {project.team}
                </p>

                <p className="card-text mb-3">
                  <strong>💻 Languages:</strong>{" "}
                  {project.languages}
                </p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light w-100 fw-semibold"
                >
                  🔗 View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
