import contact from "../data/contact";

function Contact() {
  return (
    <section
      id="contact"
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
          // CONTACT
        </p>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "800",
            marginBottom: "25px",
          }}
        >
          Let's Connect
        </h1>

        <p
          style={{
            color: "#9c8f8f",
            fontSize: "22px",
            maxWidth: "900px",
            margin: "auto",
            lineHeight: "40px",
            marginBottom: "70px",
          }}
        >
          Open to internship opportunities in Application Security,
          VAPT, Penetration Testing, and Cybersecurity Research.
        </p>
      </div>

      <div
        style={{
          maxWidth: "850px",
          margin: "auto",
          background: "#0b0608",
          border: "1px solid #2b0b14",
          borderRadius: "22px",
          padding: "50px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background: "#1a0d12",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "34px",
            marginBottom: "25px",
          }}
        >
          🔐
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "12px",
          }}
        >
          {contact.name}
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#ff4d6d",
            fontSize: "22px",
            marginBottom: "40px",
          }}
        >
          {contact.role}
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          {[
            ["📧", "Email", contact.email],
            [
              "💻",
              "GitHub",
              contact.github.replace("https://", ""),
            ],
            [
              "🔗",
              "LinkedIn",
              contact.linkedin.replace("https://", ""),
            ],
            [
              "🚩",
              "TryHackMe",
              contact.tryhackme.replace("https://", ""),
            ],
            ["📍", "Location", contact.location],
          ].map((item) => (
            <div
              key={item[1]}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                background: "#12090d",
                border: "1px solid #2b0b14",
                borderRadius: "16px",
                padding: "18px 22px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "12px",
                  background: "#1d0b12",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                }}
              >
                {item[0]}
              </div>

              <div>
                <div
                  style={{
                    color: "#777",
                    fontSize: "14px",
                    marginBottom: "4px",
                  }}
                >
                  {item[1]}
                </div>

                <div
                  style={{
                    color: "#ddd",
                    fontSize: "18px",
                    wordBreak: "break-word",
                  }}
                >
                  {item[2]}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
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

        <div
          style={{
            marginTop: "40px",
            padding: "22px",
            background: "rgba(255,77,109,0.08)",
            border: "1px solid rgba(255,77,109,0.18)",
            borderRadius: "16px",
          }}
        >
          <div
            style={{
              color: "#ff4d6d",
              marginBottom: "15px",
              letterSpacing: "2px",
              fontSize: "15px",
            }}
          >
            // CURRENTLY SEEKING
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {[
              "AppSec Intern",
              "VAPT Intern",
              "Pentesting Intern",
              "Bug Bounty",
              "Security Research",
            ].map((item) => (
              <span
                key={item}
                style={{
                  padding: "10px 18px",
                  borderRadius: "999px",
                  background: "#50d8c615",
                  border: "1px solid #50d8c655",
                  color: "#50d8c6",
                  fontSize: "16px",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;