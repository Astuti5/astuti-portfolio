function About() {
  const cards = [
    "🔎 Penetration Testing",
    "🌐 Web App Security",
    "🐍 Python Scripting",
    "🐧 Linux & Networking",
    "🎯 Bug Bounty",
    "🚩 CTF Challenges",
    "🛡️ OWASP Top 10",
    "♟️ OSINT & Recon",
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "100px 70px",
        borderTop: "1px solid #2b0b14",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#ff4d6d",
            letterSpacing: "5px",
            marginBottom: "20px",
          }}
        >
          // ABOUT ME
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            marginBottom: "30px",
          }}
        >
          Who I Am
        </h1>

        <p
          style={{
            color: "#9d8d8d",
            fontSize: "24px",
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "42px",
          }}
        >
          A security-focused CS student building real-world
          skills through labs, internships, and continuous
          learning.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "90px",
          gap: "70px",
        }}
      >
        {/* Left */}

        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#cfc2c2",
              fontSize: "20px",
              lineHeight: "55px",
            }}
          >
            I'm a pre-final year{" "}
            <span style={{ color: "#ff4d6d" }}>
              B.Tech Computer Science &
              Engineering
            </span>{" "}
            student with a deep focus on Application
            Security and Web Penetration Testing.
          </p>

          <br />

          <p
            style={{
              color: "#cfc2c2",
              fontSize: "20px",
              lineHeight: "55px",
            }}
          >
            Through internships at Prodigy InfoTech and
            JD Infotech, structured labs on TryHackMe and
            PortSwigger, and active CTF participation,
            I've built practical experience in
            vulnerability assessment, reconnaissance,
            and secure development.
          </p>

          <br />

          <p
            style={{
              color: "#cfc2c2",
              fontSize: "20px",
              lineHeight: "55px",
            }}
          >
            I work primarily in{" "}
            <span style={{ color: "#63e6be" }}>
              Kali Linux
            </span>
            , analyze web application vulnerabilities
            using{" "}
            <span style={{ color: "#63e6be" }}>
              Burp Suite
            </span>
            , and build Python automation tools for
            security tasks. As Cybersecurity Trainer at
            Technoryx Society, I mentor junior students
            and lead an 8-member outreach team.
          </p>
        </div>

        {/* Right */}

        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "25px",
          }}
        >
          {cards.map((card) => (
            <div
              key={card}
              style={{
                border: "1px solid #2b0b14",
                borderRadius: "18px",
                padding: "30px",
                background: "#0a0508",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "20px",
                minHeight: "120px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;