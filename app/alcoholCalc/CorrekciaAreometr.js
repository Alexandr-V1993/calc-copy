import "./Correkcia.css";
function CorrekciaAreometr({ setTemperature, setStrength }) {
  return (
    <>
      {" "}
      <label className="numrange row-1 van">
        <span>Температура спирта</span>
        <input
          type="number"
          className="input"
          id="nheight"
          min="0"
          max="100"
          onChange={(e) => setTemperature(e.target.value)}
          required
        />
        <div className="notation">°C</div>
      </label>
      <label className="numrange row-1 two">
        <span>Показание ареометра</span>
        <input
          type="number"
          className="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrength(e.target.value)}
          required
        />
        <div className="notation">°</div>
      </label>
    </>
  );
}

export default CorrekciaAreometr;
