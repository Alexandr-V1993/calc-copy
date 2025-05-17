function CalculateTwo({ setPercent, setNumber }) {
  return (
    <>
      <label
        className="numrange row-2 hideparts type3"
        style={{ display: "block " }}
      >
        <span>Число</span>
        <input
          type="number"
          className="input"
          id="threenum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="notation">&nbsp;</div>
      </label>
      <label
        className="numrange row-2 hideparts type3"
        style={{ display: "block" }}
      >
        <span>Прибавить процент</span>
        <input
          type="number"
          className="input"
          id="threenum2"
          onChange={(e) => setPercent(e.target.value)}
        />
        <div className="notation">%</div>
      </label>
    </>
  );
}

export default CalculateTwo;
