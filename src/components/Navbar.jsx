import navigation from "../data/navigation";

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      style={{
        height: "80px",
        borderBottom: "1px solid #2b0b14",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 50px",
        position: "sticky",
        top: 0,
        background: "rgba(7,3,6,0.95)",
        backdropFilter: "blur(12px)",
        zIndex: 100,
      }}
    >
      <h2
        onClick={() => scrollToSection("home")}
        style={{
          color: "#ff4d6d",
          fontWeight: "700",
          letterSpacing: "2px",
          cursor: "pointer",
        }}
      >
        ❯_ AK.sec
      </h2>

      <div
        style={{
          display: "flex",
          gap: "40px",
          color: "#b9a8a8",
          fontWeight: "600",
          fontSize: "16px",
        }}
      >
        {navigation.map((item) => (
          <span
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            style={{
              cursor: "pointer",
              transition: "0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.color = "#ff4d6d";
            }}
            onMouseLeave={(e) => {
              e.target.style.color = "#b9a8a8";
            }}
          >
            {item.title}
          </span>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;