"use client";
import React, { useEffect, useReducer } from "react";

const obj = {
  alcohol: null,
  heads: null,
  tails: null,
  value: null,
  total: null,
  click: false,
};

function reducer(state, action) {
  console.log(state.alcohol);
  switch (action.type) {
    case "alcohol":
      return { ...state, alcohol: action.payload };
    case "heads":
      return { ...state, heads: action.payload };
    case "tails":
      return { ...state, tails: action.payload };
    case "value":
      return { ...state, value: action.payload };
    case "total":
      return { ...state, total: action.payload };
    case "click":
      return { ...state, click: action.payload };

    default:
      return state;
  }
}

function SecondForm({ children, obj, url }) {
  const [state, dispatch] = useReducer(reducer, obj);

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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (state.total?.data?.alcohol) {
      dispatch({
        type: "alcohol",
        payload: Number(state.total?.data?.alcohol),
      });
    }
    if (state.total?.data?.heads) {
      dispatch({ type: "heads", payload: Number(state.total?.data?.heads) });
    }
    if (state.total?.data?.tails) {
      dispatch({ type: "tails", payload: Number(state.total?.data?.tails) });
    }
    if (state.total?.data?.value) {
      dispatch({ type: "value", payload: Number(state.total?.data?.value) });
    }
  }, [state.total]);

  function click() {
    dispatch({ type: "click", payload: true });
  }

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        {" "}
        <div className="centre-top testcentre">{children}</div>
        <div className="btn-top">
          <button className="btns bst" onClick={click}>
            Расчитать
          </button>
        </div>
        {state.click && state.alcohol && (
          <div id="res">
            <p className="resultstring">
              <span id="rw">Абсолютного спирта: </span>
              <span id="resultimt">
                {new Intl.NumberFormat("ru-RU").format(state.alcohol)}
                <span className="colored"> литров</span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Головы: </span>
              <span id="resultimt">
                {new Intl.NumberFormat("ru-RU").format(state.heads)}
                <span className="colored"> литров</span>{" "}
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Хвосты: </span>
              <span id="resultimt">
                {new Intl.NumberFormat("ru-RU").format(state.tails)}

                <span className="colored"> литров</span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Выход продукта крепостью 40°: </span>
              <span id="resultimt">
                {new Intl.NumberFormat("ru-RU").format(state.value)}

                <span className="colored"> литров</span>
              </span>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default SecondForm;
