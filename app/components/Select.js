import "./select.css";
function Select({
  typeDispatch,
  optionVan,
  optionTwo,
  optionThree,
  optionFour,
  optionFive,
  hadleSelect,
  valueVan,
  valueTwo,
  valueThree,
  valueFour,
  alueFive,
}) {
  return (
    <>
      <select className="select" onChange={(e) => hadleSelect(e, typeDispatch)}>
        <option value={valueVan}>{optionVan}</option>
        <option value={valueTwo}>{optionTwo}</option>
        <option value={valueThree}>{optionThree}</option>
        <option value={valueFour}>{optionFour}</option>
        <option value={alueFive}>{optionFive}</option>
      </select>
    </>
  );
}

export default Select;
// function hadleSelect(e, typeDispatch) {
//     dispatch({ type: typeDispatch, payload: e.target.value });
//   }
