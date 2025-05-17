function CalculateVan({ setNumber, setPercent }) {
  return (
    <>
      <label className="numrange row-2 hideparts active type1">
        <span>Число</span>
        <input
          type="number"
          className="input"
          id="onenum1"
          onChange={(e) => setNumber(e.target.value)}
        />
        <div className="notation">&nbsp;</div>
      </label>
      <label className="numrange row-2  hideparts active type1">
        <span>Процент от числа</span>
        <input
          type="number"
          className="input"
          id="onenum2"
          onChange={(e) => setPercent(e.target.value)}
        />
        <div className="notation">%</div>
      </label>
    </>
  );
}

export default CalculateVan;
