import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function About() {
  return (
    <div className="container-fluid bg-black text-light py-5">
      <div className="text-center mb-5">
        <h2 className="text-info fw-bold mb-2">ABOUT ME</h2>
        <h3 className="text-primary fw-semibold">I'm Onkar Shinde</h3>
        <p className="text-secondary fs-5">A Passionate Frontend Developer</p>
      </div>

      <div className="container">
        <p className="text-center mx-auto mb-4" style={{ maxWidth: "800px" }}>
          I am a dedicated and enthusiastic Frontend Developer with a strong
          passion for creating visually appealing and user-friendly web
          applications. With a solid foundation in <b>HTML, CSS, and JavaScript</b>,
          I specialize in crafting responsive designs that provide seamless user
          experiences. I also work with <b>React.js</b> and <b>Bootstrap</b> to
          build dynamic interfaces. My goal is to grow technically and contribute
          to innovative, high-quality projects.
        </p>

        <ul className="list-unstyled text-center mb-5">
          <li>🎓 Graduated in Computer Science (June 2025)</li>
          <li>📜 Bachelor's Degree (BE)</li>
        </ul>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-25 border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="text-info mb-3">Programming Languages</h5>
                <ul>
                  <li className="text-success">Java</li>
                  <li className="text-success">Advanced Java</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-25 border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="text-info mb-3">Frontend Technologies</h5>
                <ul>
                  <li className="text-success">HTML</li>
                  <li className="text-success">CSS</li>
                  <li className="text-success">JavaScript</li>
                  <li className="text-success">React.js</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-25 border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="text-info mb-3">Backend Technologies</h5>
                <ul>
                  <li className="text-success">Spring Boot</li>
                  <li className="text-success">Node.js</li>
                  <li className="text-success">Express.js</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-25 border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="text-info mb-3">Databases</h5>
                <ul>
                  <li className="text-success">MySQL</li>
                  <li className="text-success">MongoDB</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-25 border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="text-info mb-3">Tools & Frameworks</h5>
                <ul>
                  <li className="text-success">JDBC</li>
                  <li className="text-success">Hibernate</li>
                  <li className="text-success">Git & GitHub</li>
                  <li className="text-success">VS Code</li>
                  <li className="text-success">Eclipse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Internship */}
        <div className="mt-5">
          <h4 className="text-info mb-3">
            Web Developer Intern — RightShift Infotech
          </h4>
          <p className="text-light">
            During my internship, I worked on real-world web development projects
            involving frontend and backend integration. I gained hands-on
            experience with React.js, Node.js, Express.js, and MongoDB, and
            learned how to design and deploy responsive, dynamic web applications
            in a collaborative team environment.
          </p>
        </div>

        {/* Career Goals */}
        <div className="mt-4">
          <h4 className="text-info mb-3">Career Goals</h4>
          <ul>
            <li>Full Stack Java Developer</li>
            <li>Full Stack Developer</li>
            <li>React Developer</li>
            <li>MERN Stack Developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
