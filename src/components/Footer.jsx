import contact from "../data/contact";

function Footer() {
  return (
    <footer
      style={{
        padding: "80px 60px 30px",
        borderTop: "1px solid #2b0b14",
        background: "#050106",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1.2fr",
          gap: "60px",
        }}
      >
        {/* LEFT */}

        <div>
          <h1
            style={{
              fontSize: "52px",
              marginBottom: "15px",
            }}
          >
            {contact.name}
          </h1>

          <p
            style={{
              color: "#ff4d6d",
              fontSize: "24px",
              marginBottom: "30px",
            }}
          >
            {contact.role}
          </p>

          <p
            style={{
              color: "#9c8f8f",
              lineHeight: "38px",
              fontSize: "20px",
              maxWidth: "450px",
            }}
          >
            Passionate about Application Security, VAPT, Penetration
            Testing, Bug Bounty Hunting, and building practical
            cybersecurity tools.
          </p>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              marginTop: "35px",
              background: "#ff4d6d",
              color: "#fff",
              padding: "16px 34px",
              borderRadius: "14px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            ⬇ Download Resume
          </a>
        </div>

        {/* MIDDLE */}

        <div>
          <h3
            style={{
              color: "#666",
              letterSpacing: "3px",
              marginBottom: "30px",
            }}
          >
            QUICK LINKS
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              fontSize: "21px",
              color: "#d9d0d0",
            }}
          >
            <a href="#home">🏠 Home</a>
            <a href="#about">👤 About</a>
            <a href="#experience">💼 Experience</a>
            <a href="#skills">⚡ Skills</a>
            <a href="#labs">🚩 Labs</a>
            <a href="#projects">🛠 Projects</a>
            <a href="#certifications">🏆 Certifications</a>
            <a href="#contact">📧 Contact</a>
          </div>
        </div>

        {/* RIGHT */}

        <div>
          <h3
            style={{
              color: "#666",
              letterSpacing: "3px",
              marginBottom: "30px",
            }}
          >
            GET IN TOUCH
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {[
              ["📧", contact.email],
              [
                "🔗",
                contact.linkedin.replace("https://", ""),
              ],
              [
                "💻",
                contact.github.replace("https://", ""),
              ],
              [
                "🚩",
                contact.tryhackme.replace("https://", ""),
              ],
            ].map((item) => (
              <div
                key={item[1]}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  background: "#12090d",
                  border: "1px solid #2b0b14",
                  borderRadius: "15px",
                  padding: "18px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#1c0b12",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  {item[0]}
                </div>

                <span
                  style={{
                    color: "#d8cccc",
                    fontSize: "18px",
                    wordBreak: "break-word",
                  }}
                >
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div
        style={{
          borderTop: "1px solid #2b0b14",
          marginTop: "60px",
          paddingTop: "25px",
          color: "#666",
          fontSize: "17px",
          textAlign: "center",
        }}
      >
        © 2026 <b>{contact.name}</b> • Application Security &
        Penetration Testing Portfolio • {contact.location}
      </div>
    </footer>
  );
}

export default Footer;