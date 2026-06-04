import CountUp from "react-countup";

function Counter({ end, text }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2
        style={{
          color: "#ff4d6d",
          fontSize: "42px",
        }}
      >
        <CountUp end={end} duration={2} />+
      </h2>

      <p
        style={{
          color: "#9d8d8d",
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Counter;