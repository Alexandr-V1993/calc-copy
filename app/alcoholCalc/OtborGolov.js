import "./Otbor.css";
function OtborGolov({ setVolume, setStrength, setHeads }) {
  return (
    <>
      <label className="numrange row-1 van">
        <span>Объем спирта-сырца</span>
        <input
          type="number"
          className="input"
          id="nheight"
          min="0"
          onChange={(e) => setVolume(e.target.value)}
          required
        />
        <div className="notation">л.</div>
      </label>

      <label className="numrange row-1 two">
        <span>Крепость спирта-сырца</span>
        <input
          type="number"
          className="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrength(e.target.value)}
          required
        />
        <div className="notation"> °</div>
      </label>
      <label className="numrange row-1 two">
        <span>Доля «голов»</span>
        <input
          type="number"
          className="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setHeads(e.target.value)}
          required
        />
        <div className="notation">% от общего объема</div>
      </label>
    </>
  );
}

export default OtborGolov;
