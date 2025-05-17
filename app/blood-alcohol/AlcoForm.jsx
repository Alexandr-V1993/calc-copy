"use client";

import React, { useEffect, useReducer } from "react";

const initialState = {
  total: null,
  click: false,
  bac: null,
  alcoholElimination: null,
  breath: null,
  density: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };
    case "bac":
      return { ...state, bac: action.payload };
    case "alcoholElimination":
      return { ...state, alcoholElimination: action.payload };
    case "breath":
      return { ...state, breath: action.payload };
    case "density":
      return { ...state, density: action.payload };

    default:
      return state;
  }
}

function getIntoxicationLevel(bac, intoxicationTypes) {
  for (const intoxicationType of intoxicationTypes) {
    if (bac >= intoxicationType.min && bac < intoxicationType.max) {
      return { text: intoxicationType.text, color: intoxicationType.color };
    }
  }
  return { text: "Степень опьянения не определена", color: "black" };
}

function AlcoForm({ children, obj, url }) {
  const [state, dispatch] = useReducer(reducer, initialState);

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

      dispatch({ type: "total", payload: responseData });
      dispatch({ type: "click", payload: true });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (state?.total?.data) {
      dispatch({
        type: "bac",
        payload: state.total.data.bac,
      });
      dispatch({
        type: "alcoholElimination",
        payload: state.total.data.alcoholElimination,
      });
      dispatch({
        type: "breath",
        payload: state.total.data.breath,
      });
      dispatch({
        type: "density",
        payload: state.total.data.density,
      });
    }
  }, [state.total]);

  const intoxicationTypes = [
    {
      min: 0,
      max: 0.3,
      text: "Отсутствие влияния алкоголя",
      color: "#198754",
    },
    {
      min: 0.3,
      max: 0.5,
      color: "#198754",
      text: "Незначительное влияние алкоголя",
    },
    {
      min: 0.5,
      max: 1.5,
      text: "Лёгкое опьянение",
      color: "#ff8300",
    },
    {
      min: 1.5,
      max: 2.5,
      text: "Опьянение средней степени",
      color: "#dc3545",
    },
    {
      min: 2.5,
      max: 3,
      text: "Сильное опьянение",
      color: "#dc3545",
    },
    {
      min: 3,
      max: 5,
      text: "Тяжёлое отравление алкоголем, может наступить смерть",
      color: "#dc3545",
    },
    {
      min: 5,
      max: 999,
      text: "Смертельное отравление.",
      color: "#dc3545",
    },
  ];

  const { text, color } = getIntoxicationLevel(state.bac, intoxicationTypes);

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button
            className="btns bst"
            onClick={() => dispatch({ type: "click", payload: true })}
          >
            Рассчитать
          </button>
        </div>
        {state?.click && (
          <div id="res">
            <div className="test-res">
              <p className="test-2">
                <span id="rw">Концентрация алкоголя в крови</span>
                <span id="resultimt">
                  {state.bac} {state.bac ? "‰ промилле" : ""}
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Концентрация в выдыхаемом воздухе</span>
                <span id="resultimt">
                  {state.breath} {state.breath ? ", мг/л" : ""}{" "}
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Степень опьянения</span>
                <span id="a" style={{ color }}>
                  {text}
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Время выведения из организма</span>
                <span id="resultimt">
                  {state.alcoholElimination}{" "}
                  {state.alcoholElimination ? "ч." : ""}{" "}
                </span>
              </p>
              <p className="test-2">
                <span id="rw">Чистого этилового спирта</span>
                <span id="resultimt">
                  {state.density} {state.density ? "г." : ""}{" "}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default AlcoForm;
