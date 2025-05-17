import "./input.css";
function Input({
  labelTitle,
  max,
  type,
  notation,
  typeDispatch,
  hadleInput,
  placeholder,
}) {
  return (
    <>
      <label className="numrange row-1 van">
        <span>{labelTitle}</span>
        <input
          type={type}
          className="input"
          min="0"
          max={max}
          placeholder={placeholder}
          onChange={(e) => hadleInput(e, typeDispatch)}
          required
        />
        <div className="notation">{notation}</div>
      </label>
    </>
  );
}

export default Input;

// function hadleInput(e, typeDispatch) {
//     dispatch({ type: typeDispatch, payload: e.target.value });
//   }
