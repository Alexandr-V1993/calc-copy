import React from "react";
import "./razbav.css";
function RazbavlenieSpirta({ setVolume, setStrengthAfter, setStrengthBefore }) {
  return (
    <>
      <label className="numrange five">
        <span>Начальный объем спирта</span>
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

      <label className="numrange five">
        <span>Крепость начального объема</span>
        <input
          type="number"
          className="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrengthBefore(e.target.value)}
          required
        />
        <div className="notation">%</div>
      </label>
      <label className="numrange five">
        <span>Требуемая крепость</span>
        <input
          type="number"
          className="input"
          id="nweight"
          min="0"
          max="100"
          onChange={(e) => setStrengthAfter(e.target.value)}
          required
        />
        <div className="notation">%</div>
      </label>
    </>
  );
}

export default RazbavlenieSpirta;
