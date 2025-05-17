function CheckBox({ titleCheck, typeDispatch, handleCheck }) {
  return (
    <>
      <label className="row-check">
        <span>{titleCheck}</span>
        <input
          type="checkbox"
          className="check"
          onClick={() => handleCheck(typeDispatch)}
        />
      </label>
    </>
  );
}

export default CheckBox;
// function handleCheck(typeDispatch) {
//   dispatch({type:typeDispatch})
// }
