function Projects() {
  const projects = [
    {
      title: "Password Strength Checker",
      desc: "Python-based password analyzer that checks entropy, complexity, and common attack patterns.",
      tech: ["Python", "Regex", "Cybersecurity"],
    },
    {
      title: "Network Packet Analyzer",
      desc: "Built a packet sniffer to inspect live network traffic and analyze protocols.",
      tech: ["Python", "Scapy", "Networking"],
    },
    {
      title: "Caesar Cipher Tool",
      desc: "Encryption and decryption utility implementing classical cryptography concepts.",
      tech: ["Python", "Cryptography"],
    },
    {
      title: "Keylogger Simulator",
      desc: "Educational project demonstrating keyboard event capturing for security awareness.",
      tech: ["Python", "Security"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "120px 60px",
        borderTop: "1px solid #2b0b14",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#ff4d6d",
            letterSpacing: "5px",
            marginBottom: "20px",
            fontSize: "18px",
          }}
        >
          // PROJECTS
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            marginBottom: "25px",
          }}
        >
          Featured Work
        </h1>

        <p
          style={{
            color: "#a79b9b",
            fontSize: "18px",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "1.8",
            marginBottom: "70px",
          }}
        >
          Practical cybersecurity tools and automation projects built during
          internships and self-learning.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              background: "#0d0809",
              border: "1px solid rgba(255,77,109,0.12)",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            <h2
              style={{
                color: "#ff4d6d",
                fontSize: "26px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              {project.title}
            </h2>

            <p
              style={{
                color: "#a79b9b",
                fontSize: "16px",
                lineHeight: "1.8",
                marginBottom: "25px",
              }}
            >
              {project.desc}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {project.tech.map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "30px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#b9adad",
                    fontSize: "14px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;