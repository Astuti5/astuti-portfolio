import experience from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      style={{
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
          // EXPERIENCE
        </p>

        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            marginBottom: "30px",
          }}
        >
          My Journey
        </h1>

        <p
          style={{
            color: "#9d8d8d",
            fontSize: "24px",
            maxWidth: "900px",
            margin: "0 auto 80px",
            lineHeight: "42px",
          }}
        >
          From self-directed labs to hands-on internships —
          every step building toward Application Security.
        </p>
      </div>

      <div
        style={{
          borderLeft: "3px solid #ff4d6d",
          marginLeft: "20px",
          paddingLeft: "40px",
        }}
      >
        {experience.map((exp) => (
          <div
            key={exp.id}
            style={{
              background: "#0a0508",
              border: "1px solid #2b0b14",
              borderRadius: "20px",
              padding: "35px",
              marginBottom: "40px",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: exp.color,
                position: "absolute",
                left: "-50px",
                top: "40px",
                boxShadow: `0 0 15px ${exp.color}`,
              }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "15px",
                flexWrap: "wrap",
                gap: "15px",
              }}
            >
              <div>
                <h2
                  style={{
                    fontSize: "32px",
                    marginBottom: "8px",
                  }}
                >
                  {exp.role}
                </h2>

                <h3 style={{ color: exp.color }}>
                  {exp.company}
                </h3>
              </div>

              <div
                style={{
                  background: exp.color + "20",
                  padding: "10px 20px",
                  borderRadius: "30px",
                  color: exp.color,
                  border: `1px solid ${exp.color}55`,
                  fontSize: "15px",
                }}
              >
                {exp.duration}
              </div>
            </div>

            <ul
              style={{
                marginTop: "25px",
                paddingLeft: "20px",
                color: "#cfc2c2",
                lineHeight: "42px",
                fontSize: "18px",
              }}
            >
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;