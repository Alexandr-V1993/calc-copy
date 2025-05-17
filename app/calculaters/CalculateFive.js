function CalculateFive({ setnumberTwo, setNumber }) {
  return (
    <>
      <label
        className="numrange row-2 hideparts type5"
        style={{ display: "block" }}
      >
        <span>Большее число</span>
        <input
          type="number"
          className="input"
          id="fivenum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="notation">&nbsp;</div>
      </label>

      <label
        className="numrange row-2 hideparts type5"
        style={{ display: "block" }}
      >
        <span>Меньшее число</span>
        <input
          type="number"
          className="input"
          id="fivenum2"
          onChange={(e) => setnumberTwo(e.target.value)}
        />
        <div className="notation">&nbsp;</div>
      </label>
    </>
  );
}

export default CalculateFive;
