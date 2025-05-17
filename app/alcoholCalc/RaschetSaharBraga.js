import "./RaschetSahar.css";
function RaschetSaharBraga({ setVolume, setWeight }) {
  return (
    <>
      <label className="numrange row-1 van">
        <span>Вес сахара</span>
        <input
          type="number"
          className="input"
          id="nheight"
          min="0"
          onChange={(e) => setWeight(e.target.value)}
          required
        />
        <div className="notation">кг.</div>
      </label>

      <label className="numrange row-1 two">
        <span>Раствор, вода + сахар (Гидромодуль)</span>
        <input
          type="number"
          className="input"
          id="nweight"
          min="0"
          onChange={(e) => setVolume(e.target.value)}
          required
        />
        <div className="notation">л.</div>
      </label>
    </>
  );
}

export default RaschetSaharBraga;
