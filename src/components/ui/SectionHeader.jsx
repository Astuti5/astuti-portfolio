import COLORS from "../../styles/colors";

function SectionHeader({ label, title, subtitle }) {
  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: "70px",
      }}
    >
      <p
        style={{
          color: COLORS.primary,
          letterSpacing: "5px",
          marginBottom: "18px",
          fontSize: "17px",
        }}
      >
        // {label}
      </p>

      <h1
        style={{
          fontSize: "64px",
          fontWeight: "800",
          marginBottom: "25px",
        }}
      >
        {title}
      </h1>

      <p
        style={{
          color: COLORS.muted,
          maxWidth: "800px",
          margin: "auto",
          lineHeight: "38px",
          fontSize: "22px",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default SectionHeader;