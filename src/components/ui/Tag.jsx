import COLORS from "../../styles/colors";

function Badge({ children, color = COLORS.primary }) {
  return (
    <span
      style={{
        padding: "6px 14px",
        borderRadius: "30px",
        border: `1px solid ${color}55`,
        background: `${color}15`,
        color: color,
        fontSize: "13px",
      }}
    >
      {children}
    </span>
  );
}

export default Badge;