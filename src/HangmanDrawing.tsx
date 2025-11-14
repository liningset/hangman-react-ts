export function HangmanDrawing({ triesLeft }: { triesLeft: number }) {
  const HEAD = (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid white",
        position: "absolute",
        top: "50px",
        right: "-30px",
      }}
    >
      <div
        className="face"
        style={{
          visibility: triesLeft === 0 ? "visible" : "hidden",
          display: "flex",
          gap: "0.5rem",
          fontSize: "1.25rem",
          justifyContent: "center",
          marginTop: "5px",
          fontWeight: "900",
        }}
      >
        <b>X</b>
        <b>X</b>
      </div>
    </div>
  );
  const BODY = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "white",
        position: "absolute",
        right: 0,
        top: "110px",
      }}
    ></div>
  );
  const LEFTARM = (
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "white",
        position: "absolute",
        right: "1.5rem",
        top: "110px",
        transform: "rotate(45deg)",
      }}
    ></div>
  );
  const RIGHTARM = (
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "white",
        position: "absolute",
        right: "-1.5rem",
        top: "110px",
        transform: "rotate(-45deg)",
      }}
    ></div>
  );
  const LEFTLEG = (
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "white",
        position: "absolute",
        right: "1.5rem",
        top: "200px",
        transform: "rotate(45deg)",
      }}
    ></div>
  );
  const RIGHTLEG = (
    <div
      style={{
        width: "10px",
        height: "75px",
        background: "white",
        position: "absolute",
        right: "-1.5rem",
        top: "200px",
        transform: "rotate(-45deg)",
      }}
    ></div>
  );

  function showManHanging() {
    if (triesLeft === 5) return HEAD;
    if (triesLeft === 4) return [HEAD, BODY];
    if (triesLeft === 3) return [HEAD, BODY, LEFTARM];
    if (triesLeft === 2) return [HEAD, BODY, LEFTARM, RIGHTARM];
    if (triesLeft === 1) return [HEAD, BODY, LEFTARM, RIGHTARM, LEFTLEG];
    if (triesLeft === 0)
      return [HEAD, BODY, LEFTARM, RIGHTARM, LEFTLEG, RIGHTLEG];
  }

  return (
    <div style={{ position: "relative" }}>
      {showManHanging()}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "white",
          position: "absolute",
          right: "0px",
          top: "0px",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "white",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "white",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "white",
        }}
      ></div>
    </div>
  );
}
