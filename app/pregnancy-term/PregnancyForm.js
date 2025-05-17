"use client";
import React, { useEffect, useReducer, useState } from "react";

const initial = {
  total: null,

  click: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "total":
      return { ...state, total: action.payload };

    case "click":
      return { ...state, click: action.payload };

    default:
      break;
  }
}

function PregnancyForm({ children, obj, url, mode }) {
  const [state, dispatch] = useReducer(reducer, initial);

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
    dispatch({ type: "setClick", payload: false });
  }, [mode]);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    };
    const formattedDate = date.toLocaleDateString("ru-RU", options);
    const dayOfWeek = date.toLocaleDateString("ru-RU", { weekday: "long" });
    return formattedDate.replace(dayOfWeek + ",", "") + " " + dayOfWeek;
  }

  return (
    <form className="inlinecalculators" onSubmit={handleSubmit}>
      <div className="row-res">
        {" "}
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
            <p className="resultstring">
              <span id="rw">Предполагаемая дата родов (ПДР):</span>
              <span id="rw">(40 недель)</span>
              <span id="resultimt">
                {""}{" "}
                <span id="resultimt">
                  {formatDate(state?.total?.data?.value)}
                </span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Конец первого триместра:</span>
              <span id="rw">(12 недель)</span>
              <span id="resultimt">
                {""}{" "}
                <span id="resultimt">
                  {formatDate(state?.total?.data?.trimesters[12])}
                </span>
              </span>
            </p>
            <p className="resultstring">
              <span id="rw">Конец второго триместра:</span>
              <span id="rw"> (27 недель)</span>
              <span id="resultimt">
                {""}{" "}
                <span id="resultimt">
                  {formatDate(state?.total?.data?.trimesters[27])}
                </span>
              </span>
            </p>

            <p className="resultstring">
              <span id="rw">Предполагаемая дата зачатия:</span>
              <span id="resultimt">
                {""}{" "}
                <span id="resultimt">
                  {formatDate(state?.total?.data?.conception)}
                </span>
              </span>
            </p>

            <p className="resultstring">
              <span id="rw">Срок беременности:</span>
              <span id="resultimt">
                {""}{" "}
                <span id="resultimt">
                  {state?.total?.data?.gestationalAge} неделя
                </span>
              </span>
            </p>
          </div>
        )}
      </div>
    </form>
  );
}

export default PregnancyForm;
