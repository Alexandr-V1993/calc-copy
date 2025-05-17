import React, { useEffect, useState } from "react";

import "./Form.css";
function Form({
  children,
  obj,
  url,
  formTitle,
  all,
  summaOblog,
  nextDay,
  ostatokDay,
  year,
  month,
  days,
  hour,
  minut,
  sec,
  dn,
  alcoTitle,
  crepost,
  condition,

  selectSumm,
  selectSummProcent,
}) {
  const [total, setTotal] = useState("");
  const [vans, setVans] = useState("");
  const [strength, setStrength] = useState("");
  const [amount, setAmount] = useState("");
  const [tax, setTax] = useState("");
  const [bmt, setBmt] = useState("");
  const [weights, setwWights] = useState("");

  let m;
  let y;
  let d;
  let h;
  let i;
  let nextBirthday;
  let q;
  let s;
  let untilNextBirthday;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });

    const responseData = await response.json();
    setTotal(responseData);
  };
  useEffect(() => {
    if (total?.data?.bmi) {
      setVans(total?.data?.bmi);
      setBmt(total?.data?.bmiCategory);
    }
    if (total?.data?.amount) {
      setAmount(total?.data?.amount);
      setTax(total?.data?.tax);
    }
    if (total?.data?.value) {
      setVans(total?.data?.value);
      setStrength(total?.data?.strength);
    }
    if (total?.data?.volumeHeads && total?.data?.volumePureAlcohol) {
      setVans(total?.data?.volumePureAlcohol);
      setStrength(total?.data?.volumeHeads);
    }
    if (total?.data?.weight) {
      setwWights(total?.data?.weight);
    }
  }, [total]);

  if (total?.data?.d) {
    d = total?.data?.d;
    h = total?.data?.h;
    i = total?.data?.i;
    m = total?.data?.m;
    nextBirthday = total?.data?.nextBirthday;
    q = total?.data?.q;
    s = total?.data?.s;
    untilNextBirthday = total?.data?.untilNextBirthday;
    y = total?.data?.y;
  }

  useEffect(() => {
    setVans("");
  }, [condition]);

  useEffect(() => {
    setTax("");
    setAmount("");
  }, [selectSumm]);

  useEffect(() => {
    setTax("");
    setAmount("");
  }, [selectSummProcent]);

  return (
    <form className="inlinecalculator " onSubmit={handleSubmit}>
      <div className="centre-top">{children}</div>
      <div id="result" style={{ wordBreak: "break-all", maxWidth: "100%" }}>
        <p className="vsize">{formTitle}</p>

        <div className="resultscentre-centre">
          <div className="resultscentre">
            <span className="bg">
              <strong>{y}</strong>

              {total?.data?.y ? year : year}
            </span>
            <span className="bg">
              <strong> {m}</strong>
              {total?.data?.m ? month : month}
            </span>
            <span className="bg">
              <strong> {d}</strong>
              {total?.data?.d ? days : days}
            </span>
            <span className="bg">
              <strong> {h}</strong>
              {total?.data?.h ? hour : hour}
            </span>
            <span className="bg">
              <strong> {i}</strong>
              {total?.data?.i ? minut : minut}
            </span>
            {/* <span className="bg">
              <strong>{s}</strong>
              {total?.data?.s ? sec : sec}
            </span> */}
          </div>
          <p className="pd">
            {total?.data?.nextBirthday ? nextDay : ""}
            <strong> {nextBirthday}</strong>
          </p>
          <p className="pd">
            {total?.data?.untilNextBirthday ? ostatokDay : ""}
            <strong>
              {untilNextBirthday}
              {total?.data?.untilNextBirthday ? dn : ""}
            </strong>
          </p>
        </div>
        {weights}
        <p className="resultstring">
          <span id="resultimt"> {alcoTitle}</span>
          <span id="resultimt">
            {vans ? new Intl.NumberFormat("ru-RU").format(vans) : ""}

            {all === "литров" ? "" : all}
            {tax ? new Intl.NumberFormat("ru-RU").format(tax) : ""}
          </span>
          <span id="resultimt">{crepost}</span>
          <span id="resultimt">
            {weights}{" "}
            {strength ? new Intl.NumberFormat("ru-RU").format(strength) : ""}
          </span>
        </p>
        <p>
          {summaOblog}{" "}
          <span
            className="blacks "
            style={{
              color:
                bmt === "MorbidObesity"
                  ? "red"
                  : "" || bmt === "Overweight"
                  ? "orange"
                  : "" || bmt === "ObeseClass1"
                  ? "red"
                  : "" || bmt === "ObeseClass2"
                  ? "red"
                  : "" || bmt === "SevereThinness"
                  ? "red"
                  : "" || bmt === "Underweight"
                  ? "orange"
                  : "" || bmt === "Normal"
                  ? "green"
                  : "",
            }}
          >
            {bmt === "MorbidObesity"
              ? "Ожирение третьей степени (морбидное)"
              : ""}
            {bmt === "ObeseClass1" ? "Ожирение первой степени" : ""}
            {bmt === "ObeseClass2" ? "Ожирение второй степени" : ""}
            {bmt === "Normal" ? "Нормальная масса тела" : ""}
            {bmt === "SevereThinness" ? "Выраженный дефицит массы тела" : ""}
            {bmt === "Overweight" ? "Избыточная масса тела (предожирение)" : ""}
            {bmt === "Underweight" ? "Недостаточная (дефицит) масса тела" : ""}
            {amount ? new Intl.NumberFormat("ru-RU").format(amount) : ""}
          </span>
        </p>
      </div>
      <div className="btn-top">
        {" "}
        <button className="btns bst" onSubmit={handleSubmit}>
          Рассчитать
        </button>
      </div>
    </form>
  );
}

export default Form;
