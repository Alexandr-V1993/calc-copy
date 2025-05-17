import "./Glucoza.css";
function Glucoza({ setWeight }) {
  return (
    <>
      {" "}
      <label className="numrange row-1 van">
        <span>Количество сахара</span>
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
    </>
  );
}

export default Glucoza;
