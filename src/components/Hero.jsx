function Hero() {
  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 60px",
      }}
    >
      {/* Left Side */}

      <div style={{ width: "50%" }}>
        <p
          style={{
            color: "#ff4d6d",
            letterSpacing: "4px",
            marginBottom: "30px",
          }}
        >
          {">"} INITIALIZING PORTFOLIO...
        </p>

        <h1
          style={{
            fontSize: "72px",
            lineHeight: "80px",
            fontWeight: "800",
          }}
        >
          Hi, I'm
          <br />
          <span style={{ color: "#ff4d6d" }}>
            Astuti Kumari
          </span>
        </h1>

        <h2
          style={{
            color: "#ff7b9c",
            marginTop: "25px",
            fontSize: "22px",
            lineHeight: "45px",
            fontWeight: "500",
          }}
        >
          Cybersecurity Student &nbsp; | <br />
          Penetration Tester &nbsp; | &nbsp;
          Bug Bounty Learner
        </h2>

        <p
          style={{
            color: "#bbaaaa",
            marginTop: "35px",
            maxWidth: "550px",
            fontSize: "18px",
            lineHeight: "45px",
          }}
        >
          Passionate about securing web applications
          through practical penetration testing,
          vulnerability assessment, and hands-on security
          research. Solving CTFs, breaking labs, and
          building tools that matter.
        </p>
      </div>

      {/* Right Side */}

      <div
        style={{
          width: "420px",
          height: "420px",
          border: "1px solid #2b0b14",
          borderRadius: "20px",
          padding: "30px",
          background: "#0a0508",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#c92a2a",
              borderRadius: "50%",
            }}
          ></div>

          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#f08c00",
              borderRadius: "50%",
            }}
          ></div>

          <div
            style={{
              width: "14px",
              height: "14px",
              background: "#2f9e44",
              borderRadius: "50%",
            }}
          ></div>
        </div>

        <div
          style={{
            color: "#ffffff",
            lineHeight: "45px",
            fontFamily: "monospace",
            fontSize: "22px",
          }}
        >
          <p>
            <span style={{ color: "#ff4d6d" }}>
              astuti@sec:~$
            </span>{" "}
            whoami
          </p>

          <p>Astuti Kumari — Cybersecurity Student</p>

          <br />

          <p>
            <span style={{ color: "#ff4d6d" }}>
              astuti@sec:~$
            </span>{" "}
            ls skills/
          </p>

          <p>
            Web AppSec VAPT Python BurpSuite Kali
            Linux
          </p>

          <br />

          <p>
            <span style={{ color: "#ff4d6d" }}>
              astuti@sec:~$
            </span>{" "}
            cat interests.txt
          </p>

          <p>
            Bug Bounty | CTFs | Security Research
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;