import certifications from "../data/certifications";

function Certifications() {
  return (
    <section
      id="certifications"
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
          // CERTIFICATIONS
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            marginBottom: "25px",
          }}
        >
          Credentials
        </h1>

        <p
          style={{
            color: "#a79b9b",
            fontSize: "18px",
            maxWidth: "850px",
            margin: "auto",
            lineHeight: "1.8",
            marginBottom: "70px",
          }}
        >
          Professional certifications and virtual experience programs
          that strengthened my cybersecurity foundation.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "25px",
        }}
      >
        {certifications.map((cert) => (
          <div
            key={cert.id}
            style={{
              background: "#0d0809",
              border: `1px solid ${cert.color}20`,
              borderRadius: "18px",
              padding: "30px",
              transition: "0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = cert.color;
              e.currentTarget.style.transform =
                "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor =
                `${cert.color}20`;
              e.currentTarget.style.transform =
                "translateY(0px)";
            }}
          >
            <div
              style={{
                fontSize: "34px",
                marginBottom: "15px",
              }}
            >
              {cert.icon}
            </div>

            <h2
              style={{
                color: cert.color,
                fontSize: "24px",
                marginBottom: "15px",
                fontWeight: "700",
                lineHeight: "34px",
              }}
            >
              {cert.title}
            </h2>

            <p
              style={{
                color: "#a79b9b",
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              {cert.issuer}
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  padding: "8px 16px",
                  borderRadius: "25px",
                  background: `${cert.color}12`,
                  border: `1px solid ${cert.color}40`,
                  color: cert.color,
                  fontSize: "14px",
                }}
              >
                2025
              </span>

              <span
                style={{
                  color: "#56ffe1",
                  fontSize: "15px",
                  fontWeight: "600",
                }}
              >
                View →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;