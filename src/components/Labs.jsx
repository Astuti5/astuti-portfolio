import labs from "../data/labs";

function Labs() {
  return (
    <section
      id="labs"
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
          // LABS
        </p>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "800",
            marginBottom: "25px",
          }}
        >
          Practical Learning
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
          Building real-world cybersecurity skills through structured
          labs, CTF challenges, and virtual experience programs.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "35px",
        }}
      >
        {labs.map((lab) => (
          <div
            key={lab.id}
            style={{
              background: "#0b0608",
              border: "1px solid #2b0b14",
              borderTop: `2px solid ${lab.color}`,
              borderRadius: "20px",
              padding: "40px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = lab.color;
              e.currentTarget.style.transform =
                "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2b0b14";
              e.currentTarget.style.borderTop =
                `2px solid ${lab.color}`;
              e.currentTarget.style.transform =
                "translateY(0px)";
            }}
          >
            <h2
              style={{
                color: lab.color,
                fontSize: "34px",
                marginBottom: "20px",
              }}
            >
              {lab.icon} {lab.platform}
            </h2>

            <p
              style={{
                color: "#c7baba",
                lineHeight: "36px",
                fontSize: "20px",
                marginBottom: "25px",
              }}
            >
              {lab.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                marginBottom: "28px",
              }}
            >
              {lab.completed.slice(0, 5).map((item) => (
                <span
                  key={item}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: `${lab.color}12`,
                    border: `1px solid ${lab.color}40`,
                    color: lab.color,
                    fontSize: "14px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  border: `1px solid ${lab.color}55`,
                  background: `${lab.color}10`,
                  color: lab.color,
                  fontSize: "18px",
                }}
              >
                {lab.stat}
              </span>

              <a
                href={lab.profile}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#5ef2d6",
                  fontSize: "18px",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Visit Profile →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Labs;