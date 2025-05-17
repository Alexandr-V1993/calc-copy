function CalculateSeven({ setNumber, setnumberTwo }) {
  return (
    <>
      <label
        className="numrange row-2 hideparts type2"
        style={{ display: "block" }}
      >
        <span>Число 1</span>
        <input
          type="number"
          className="input"
          id="twonum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="notation">&nbsp;</div>
      </label>
      <label
        className="numrange row-2 hideparts type2"
        style={{ display: "block" }}
      >
        <span>Число 2</span>
        <input
          type="number"
          className="input"
          id="twonum2"
          onChange={(e) => setnumberTwo(e.target.value)}
        />
        <div className="notation">&nbsp;</div>
      </label>
    </>
  );
}

export default CalculateSeven;
