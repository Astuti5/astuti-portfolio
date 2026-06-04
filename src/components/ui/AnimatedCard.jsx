function AnimatedCard({ children }) {
  return (
    <div
      style={{
        background: "#0b0608",
        border: "1px solid #2b0b14",
        borderRadius: "20px",
        padding: "35px",
        transition: ".3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.borderColor = "#ff4d6d";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0px)";
        e.currentTarget.style.borderColor = "#2b0b14";
      }}
    >
      {children}
    </div>
  );
}

export default AnimatedCard;