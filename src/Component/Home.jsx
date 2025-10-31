import React from "react";
import onkar from "../assets/onkar.jpg";

function Home() {
  const styles = {
    container: {
      minHeight: "100vh",
      background: "linear-gradient(180deg, #000, #111)",
      color: "white",
      fontFamily: "Poppins, sans-serif",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      textAlign: "center",
    },
    intro: {
      fontSize: "1.3rem",
      color: "cyan",
      marginBottom: "10px",
    },
    name: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "white",
      marginBottom: "30px",
      animation: "float 4s ease-in-out infinite",
      transition: "all 0.4s ease",
    },
    mainSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "1100px",
      width: "100%",
      gap: "40px",
      flexWrap: "wrap",
    },
    textContent: {
      flex: 1,
      minWidth: "300px",
      textAlign: "left",
    },
    role: {
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "cyan",
      marginBottom: "20px",
    },
    description: {
      fontSize: "1rem",
      color: "#ccc",
      lineHeight: 1.6,
      marginBottom: "25px",
    },
    spanHighlight: {
      color: "cyan",
      fontWeight: 500,
    },
    buttons: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "8px",
      fontWeight: 600,
      border: "none",
      cursor: "pointer",
      transition: "0.3s ease",
    },
    resumeBtn: {
      background: "cyan",
      color: "black",
    },
    workBtn: {
      background: "transparent",
      color: "cyan",
      border: "2px solid cyan",
    },
    imageSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    profile: {
      width: "300px",
      height: "300px",
      borderRadius: "20px",
      objectFit: "cover",
      border: "3px solid cyan",
      boxShadow: "0 0 30px rgba(0,255,255,0.5)",
      animation: "float 4s ease-in-out infinite",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
    },
  };

  // Add CSS keyframes manually for animation
  const styleSheet = document.styleSheets[0];
  if (styleSheet && !Array.from(styleSheet.cssRules).some(rule => rule.name === "float")) {
    styleSheet.insertRule(`
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
    `, styleSheet.cssRules.length);
  }

  return (
    <div style={styles.container}>
      <p style={styles.intro}
      onMouseEnter={(e) => {
          e.target.style.color = "dark";
          e.target.style.textShadow = "0 0 20px cyan";
          e.target.style.transform = "scale(1.05)";
        }}
      >
        
        Welcome to my portfolio website!</p>

      {/* Animated Name */}
      <h1
        style={styles.name}
        onMouseEnter={(e) => {
          e.target.style.color = "dark";
          e.target.style.textShadow = "0 0 20px dark";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "white";
          e.target.style.textShadow = "none";
          e.target.style.transform = "scale(1)";
        }}
      >
        ONKAR MANOHAR SHINDE
      </h1>

      <div style={styles.mainSection}>
        <div style={styles.textContent}>
          <h2 style={styles.role}>
            Full Stack Java Developer & MERN Stack Developer
          </h2>
          <p style={styles.description}>
            I’m a passionate developer who loves building scalable, high-performance web applications.
            With a strong foundation in{" "}
            <span style={styles.spanHighlight}>
              Java, Spring Boot, React, Node.js, and MongoDB
            </span>
            , I enjoy creating efficient backends and visually appealing frontends that deliver smooth user experiences.
            I’m deeply interested in{" "}
            <span style={styles.spanHighlight}>modern web technologies</span>,
            clean code architecture, and problem-solving — always eager to learn, adapt, and explore new challenges.
          </p>

          <div style={styles.buttons}>
            <a
            
              href="/OnkarShinderesume()()new.docx "
              download="Onkar_Resume_OnkarShinde.docx"
              style={{ ...styles.button, ...styles.resumeBtn }}
              onMouseEnter={(e) =>
                (e.target.style.boxShadow = "0 0 20px cyan")
              }
              onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
            >
              Resume
            </a>
            <button
              style={{ ...styles.button, ...styles.workBtn }}
              onMouseEnter={(e) => {
                e.target.style.background = "cyan";
                e.target.style.color = "black";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "cyan";
              }}
            >
              View Work
            </button>
          </div>
        </div>

        <div style={styles.imageSection}>
          <img
            src={onkar}
            alt="Onkar"
            style={styles.profile}
          />
          
        </div>
      </div>
    </div>
  );
}

export default Home;
