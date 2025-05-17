import React, { useState, useEffect } from "react";

function Armatura({ onDataUpdate }) {
  const [diam, setDiam] = useState(true);
  const [obj, setObj] = useState({
    length: "",
    type: "armature",
    specificationId: null,
    d: null, // Добавлено свойство d
  });
  const [standards, setStandards] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [metal, setMetal] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("https://calcoffee.ru/api/metal/standards?type=armature&metal=steel")
      .then((response) => response.json())
      .then((data) => setStandards(data.data.standards))
      .catch((error) => console.error("Ошибка загрузки стандартов:", error));
  }, []);

  const handleStandardChange = (e) => {
    const selectedStandardId = e.target.value;
    const selectedStandard = standards.find(
      (standard) => standard.id === parseInt(selectedStandardId)
    );
    if (selectedStandard) {
      setDescription(selectedStandard.description);
      fetch(
        `https://calcoffee.ru/api/metal/specifications?standardId=${selectedStandardId}&type=armature`
      )
        .then((response) => response.json())
        .then((data) => setSpecifications(data.data.specifications))
        .catch((error) =>
          console.error("Ошибка загрузки спецификаций:", error)
        );
    }
  };

  const handleSpecificationChange = (e) => {
    const selectedSpecificationId = e.target.value;
    const selectedSpecification = specifications.find(
      (specification) => specification.id === parseInt(selectedSpecificationId)
    );
    if (selectedSpecification && diam) {
      const filteredSpecification = Object.keys(selectedSpecification)
        .filter(
          (key) =>
            !["h", "t", "weight", "name", "id", "d", "s", "b"].includes(key)
        )
        .reduce((obj, key) => {
          obj[key] = selectedSpecification[key];
          return obj;
        }, {});

      const updatedObj = {
        ...filteredSpecification,
        type: "armature",
        specificationId: selectedSpecificationId,
        length: obj.length,
        d: selectedSpecification.d, // Обновлено свойство d
      };

      setObj(updatedObj);
      onDataUpdate(updatedObj);
    }
  };

  const handleLengthChange = (e) => {
    const newLength = e.target.value;
    const updatedObj = {
      ...obj,
      length: newLength,
    };
    setObj(updatedObj);
    onDataUpdate(updatedObj);
  };

  const handleWidthChange = (e) => {
    const newWidth = e.target.value;
    const updatedObj = {
      ...obj,
      d: newWidth,
    };
    setObj(updatedObj);
    onDataUpdate(updatedObj);
  };

  const clickDiam = (isDiam) => {
    if (diam !== isDiam) {
      setDiam(isDiam);
      if (!isDiam) {
        const { specificationId, ...updatedObj } = obj;
        setObj(updatedObj);
        onDataUpdate(updatedObj);
      } else {
        setObj((prevObj) => ({ ...prevObj }));
        onDataUpdate({ ...obj });
      }
    }
  };

  useEffect(() => {
    if (!diam) {
      setObj((prevObj) => ({ ...prevObj }));
      onDataUpdate({ ...obj });
    }
  }, [diam]);

  return (
    <div className="row-step">
      <div className="calc-frow grow-gaps">
        <div
          className={`calc-fleft ${diam ? "active-und" : "dosh"}`}
          onClick={() => clickDiam(true)}
        >
          Выбрать из справочника
        </div>
        <div
          className={`calc-fright ${diam ? "dosh" : "active-und"}`}
          onClick={() => clickDiam(false)}
        >
          По размеру
        </div>
      </div>

      {diam ? (
        <>
          <div className="label-row">
            <label>
              <span>Номинальный диаметр</span>
              <select
                name="standard"
                className="calc-inp"
                onChange={handleStandardChange}
              >
                <option value="">- Справочник -</option>
                {standards.map((standard) => (
                  <option key={standard.id} value={standard.id}>
                    {standard.name}
                  </option>
                ))}
              </select>
            </label>
            <label>
              <select
                name="specification"
                className="calc-inp w-100 select-width"
                onChange={handleSpecificationChange}
              >
                <option value="">- Диаметр - (мм) </option>
                {specifications.map((specification) => (
                  <option key={specification.id} value={specification.id}>
                    {specification.d}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="calc-fright">
            <dl className="m-0">
              <dt className="font-dt">Описание</dt>
              <dd className="calc-input-desc centre-calcs">{description}</dd>
            </dl>
          </div>
          <div className="calc-frow">
            <div className="calc-fright">
              <figure>
                <img
                  src="/armatura.png"
                  alt="Расчет веса арматуры"
                  title="Расчет веса арматуры"
                  loading="lazy"
                  decoding="async"
                  width="150"
                  height="171"
                />
              </figure>
              <div className="dimensions-container">
                <span className="dimension-a-armatura">
                  {obj.d !== undefined && obj.d !== null
                    ? /\d/.test(obj.d)
                      ? obj.d
                      : `d`
                    : ""}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-column-dev">
          <div className="flex-column-dev">
            <div className="calc-fleft">
              <label>
                <span>Диаметр (D)</span>
                <input
                  type="number"
                  name="width"
                  className="calc-inp w-100"
                  onChange={handleWidthChange}
                  placeholder="D"
                  required
                  step="0.01"
                />
              </label>
            </div>

            <div className="calc-frow">
              <div className="calc-fright">
                <figure>
                  <img
                    src="/armatura.png"
                    alt="Расчет веса арматуры"
                    title="Расчет веса арматуры"
                    loading="lazy"
                    decoding="async"
                    width="150"
                    height="171"
                  />
                </figure>
                <div className="dimensions-container">
                  <span className="dimension-a-armatura">
                    {obj.d !== undefined && obj.d !== null
                      ? /\d/.test(obj.d)
                        ? obj.d
                        : `d`
                      : ""}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div>
        <label>
          <span>Длина (L)</span>
          <input
            type="number"
            name="thickness"
            className="calc-inp w-100"
            value={obj.length}
            onChange={handleLengthChange}
            placeholder="Длина (L)"
            required
            step="0.01"
          />
        </label>
      </div>
    </div>
  );
}

export default Armatura;
