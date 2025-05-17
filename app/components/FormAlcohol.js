import React, { useState, useEffect } from "react";
import "./FormAlcohol.css";

function FormAlcohol({
  children,
  obj,
  url,
  formTitle,
  all,
  summaOblog,
  alcoTitle,
  crepost,
  select,
  strengthAfter,
  setStrengthAfter,
  spirt,
  golovi,
  hvosti,
  vihod,
}) {
  console.log(spirt);
  const [total, setTotal] = useState("");
  const [vans, setVans] = useState("");
  const [click, setClick] = useState(false);
  const [weight, setWeight] = useState("");
  const [strength, setStrength] = useState("");
  const [clip, setClip] = useState("Скопировать");
  const [glucoza, setGlucoza] = useState(
    "Из глюкозы и фруктозы получается на 5% меньше спирта, чем из сахарозы, но выше качество спирта."
  );
  const [areometr, setAreometr] = useState(
    "Ареометр показывает крепость верно только при температуре 20 °C."
  );
  const [dannie, setDannie] = useState(
    "Данные результаты актуальны и верны при температуре компонентов равной 20°C"
  );
  const [alcohol, setaAcohol] = useState();
  const [heads, setHeads] = useState();
  const [tails, setTails] = useState();
  const [value, setValue] = useState();

  let weights;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      const responseData = await response.json();
      setTotal(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Используем useEffect, чтобы обработать изменение total и сбросить переменные при изменении селекта
  useEffect(() => {
    if (total?.data?.value) {
      setVans(total.data.value);
      setaAcohol(total?.data?.alcohol);
      setHeads(total?.data?.heads);
      setTails(total?.data?.tails);
      setStrength(total.data.strength);
    } else if (total?.data?.volumeHeads && total?.data?.volumePureAlcohol) {
      setVans(total.data.volumePureAlcohol);
      setStrength(total?.data?.volumeHeads);
    } else if (total?.data?.tails) {
      setaAcohol(total?.data?.alcohol);
      setHeads(total?.data?.heads);
      setTails(total?.data?.tails);
    }
  }, [total]);

  useEffect(() => {
    setClick(false);
  }, [select]);
  // Обнуляем переменные при изменении значения селекта
  useEffect(() => {
    setStrength("");
    setWeight("");
    setVans("");
    setStrengthAfter("");
  }, [select]);
  useEffect(() => {
    setTimeout(() => {
      if (clip === "Скопировано") {
        setClip("Скопировать");
      }
    }, 1500);
  }, [clip]);
  return (
    <form
      className="inlinecalculators"
      onSubmit={handleSubmit}
      style={{ wordBreak: "break-all" }}
    >
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={() => setClick(true)}>
            Рассчитать
          </button>
        </div>
        {click && (
          <div className="res">
            <p className="vsizes">{formTitle}</p>
            {weights}
            {select === "type7" && (
              <p className="resultstring">
                <span id="resultimt">{spirt}</span>
                <span id="resultimt">{alcohol}</span>
                <span id="resultimt">
                  {golovi}
                  {heads}
                </span>
                <span id="resultimt">
                  {hvosti}
                  {tails}
                </span>
                <span id="resultimt">{value}</span>
              </p>
            )}
            <p className="resultstring">
              <span id="resultimt">
                {alcoTitle}
                {select === "type3" || select === "type4" ? "°" : ""}
                {all === "литров" ? "" : all}
              </span>
              <span style={{ fontSize: "15px" }} className="r-d">
                {vihod}
              </span>
              <span id="resultimt">
                {vans ? new Intl.NumberFormat("ru-RU").format(vans) : ""}
                {select === "type3" || select === "type4" ? "°" : ""}
                {all === "литров" ? "" : all}
              </span>
            </p>
            <p className="resultstring">
              <span id="resultimt">{crepost}</span>

              <span id="resultimt">
                {weight}
                {strength
                  ? new Intl.NumberFormat("ru-RU").format(strength)
                  : ""}{" "}
                {select === "type2" ? "°" : ""}
              </span>
            </p>
            <p>{summaOblog}</p>
            {select === "type3" ||
              (select === "type5" && <p className="color-celcii">{dannie}</p>)}
            {select === "type4" && <p className="color-celcii">{areometr}</p>}
            {select === "type6" && <p className="color-celcii">{glucoza}</p>}
            {select === "type1" && (
              <div>
                <p
                  className={`greys ${
                    clip === "Скопировано" ? "active-greys" : ""
                  }`}
                >
                  Для получения{" "}
                  <span
                    className={`resulthour ${
                      clip === "Скопировано"
                        ? "active-resulthour"
                        : "resulthour"
                    }`}
                  >
                    {strengthAfter}%
                  </span>{" "}
                  после разбавления, нужно добавить{" "}
                  <span
                    className={`resulthour ${
                      clip === "Скопировано"
                        ? "active-resulthour"
                        : "resulthour"
                    }`}
                  >
                    {vans}
                  </span>{" "}
                  литров воды
                </p>
                <p
                  className="greys"
                  onClick={() =>
                    navigator.clipboard.writeText(
                      `Для получения ${strengthAfter}% после разбавления, нужно добавить ${vans} литров воды`,
                      setClip("Скопировано")
                    )
                  }
                  style={{
                    color: clip === "Скопировано" ? "#27d827" : "grey",
                  }}
                >
                  {clip}
                  {}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  );
}

export default FormAlcohol;
