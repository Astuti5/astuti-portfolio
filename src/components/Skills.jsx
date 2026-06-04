import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: "180px 60px 100px",
        borderTop: "1px solid #2b0b14",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <p
          style={{
            color: "#ff4d6d",
            letterSpacing: "5px",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          // SKILLS
        </p>

        <h1
          style={{
            fontSize: "76px",
            fontWeight: "800",
            marginBottom: "30px",
          }}
        >
          Technical Arsenal
        </h1>

        <p
          style={{
            color: "#9c8f8f",
            fontSize: "24px",
            lineHeight: "42px",
            maxWidth: "900px",
            margin: "auto",
            marginBottom: "60px",
          }}
        >
          Tools and technologies I use to find, exploit, and remediate
          security vulnerabilities.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
        }}
      >
        {skills.map((card) => (
          <div
            key={card.id}
            style={{
              background: "#0b0608",
              border: "1px solid #2b0b14",
              borderRadius: "22px",
              padding: "35px",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = card.color;
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2b0b14";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <h3
              style={{
                color: card.color,
                letterSpacing: "4px",
                marginBottom: "28px",
                fontWeight: "500",
              }}
            >
              ▸ {card.title}
            </h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              {card.items.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "10px 18px",
                    borderRadius: "999px",
                    border: `1px solid ${card.color}55`,
                    background: `${card.color}12`,
                    color: card.color,
                    fontSize: "20px",
                    transition: "0.25s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = `${card.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = `${card.color}12`;
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;