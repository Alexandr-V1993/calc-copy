import React, { useState, useEffect } from "react";

function Ugolok({ onDataUpdate }) {
  const [diam, setDiam] = useState(true);
  const [obj, setObj] = useState({
    a: null,
    b: null,
    s: null,
    ro: 7850, // Устанавливаем значение ro по умолчанию
    length: "",
    type: "angle",
    specificationId: null,
    materialId: null,
  });
  const [standards, setStandards] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [metal, setMetal] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("https://calcoffee.ru/api/metal/standards?type=angle&metal=steel")
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
        `https://calcoffee.ru/api/metal/specifications?standardId=${selectedStandardId}&type=angle`
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
        .filter((key) => !["h", "t", "weight", "name", "id", "d"].includes(key))
        .reduce((obj, key) => {
          obj[key] = selectedSpecification[key];
          return obj;
        }, {});

      const updatedObj = {
        ...filteredSpecification,
        type: "angle",
        specificationId: selectedSpecificationId,
        length: obj.length,
        a: filteredSpecification.a,
        b: filteredSpecification.b,
        s: filteredSpecification.s,
        ro: obj.ro, // Сохраняем текущее значение ro
      };

      if (updatedObj.b === null) {
        updatedObj.b = updatedObj.a;
      }

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

  const handleMetalChange = (e) => {
    const selectedMetal = e.target.value;
    setMetal(selectedMetal);

    fetch(`https://calcoffee.ru/api/metal/materials?metal=${selectedMetal}`)
      .then((response) => response.json())
      .then((data) => {
        setMaterials(data.data.materials);
        setObj((prevObj) => ({ ...prevObj, materialId: null }));
        onDataUpdate({ ...obj, materialId: null });
      })
      .catch((error) => console.error("Ошибка загрузки материалов:", error));
  };

  const handleMaterialChange = (e) => {
    const selectedMaterialId = e.target.value;
    const selectedMaterial = materials.find(
      (material) => material.id === parseInt(selectedMaterialId)
    );
    if (selectedMaterial) {
      const updatedObj = {
        ...obj,
        materialId: selectedMaterialId,
        ro: selectedMaterial.ro,
      };
      setObj(updatedObj);
      onDataUpdate(updatedObj);
    }
  };

  const handleWidthChange = (e) => {
    const newWidth = e.target.value;
    const updatedObj = {
      ...obj,
      a: newWidth,
    };
    setObj(updatedObj);
    onDataUpdate(updatedObj);
  };

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    const updatedObj = {
      ...obj,
      b: newHeight,
    };
    setObj(updatedObj);
    onDataUpdate(updatedObj);
  };

  const handleThicknessChange = (e) => {
    const newThickness = e.target.value;
    const updatedObj = {
      ...obj,
      s: newThickness,
    };
    setObj(updatedObj);
    onDataUpdate(updatedObj);
  };

  const clickDiam = (isDiam) => {
    if (diam !== isDiam) {
      setDiam(isDiam);
      if (!isDiam) {
        const { specificationId, ...updatedObj } = obj;
        setObj({ ...updatedObj, ro: 7850 }); // Устанавливаем ro в 7850 при переключении на вкладку "Выбрать из справочника"
        onDataUpdate({ ...updatedObj, ro: 7850 }); // Также обновляем данные, отправляемые родительскому компоненту
      } else {
        setObj((prevObj) => ({ ...prevObj, ro: 7850 })); // Устанавливаем ro в 7850 при переключении на вкладку "Выбрать из справочника"
        onDataUpdate({ ...obj, ro: 7850 }); // Также обновляем данные, отправляемые родительскому компоненту
      }
    }
  };

  useEffect(() => {
    if (!diam) {
      setObj((prevObj) => ({ ...prevObj, ro: 7850 }));
      onDataUpdate({ ...obj, ro: 7850 });
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
              <span>Тип и размер уголка</span>
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
                <option value="">- Размер - (мм)</option>
                {specifications.map((specification) => (
                  <option key={specification.id} value={specification.id}>
                    {`${specification.a !== null ? specification.a : ""}${
                      specification.a !== null && specification.b !== null
                        ? "x"
                        : ""
                    }${specification.b !== null ? specification.b : ""}${
                      (specification.a !== null || specification.b !== null) &&
                      specification.s !== null
                        ? "x"
                        : ""
                    }${specification.s !== null ? specification.s : ""}`}
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
                  src="/ugolok.png"
                  alt="Расчет веса уголка"
                  title="Расчет веса уголка"
                  loading="lazy"
                  decoding="async"
                  width="150"
                  height="171"
                />
              </figure>
              <div className="dimensions-container">
                <span className="dimension-b">
                  {obj.b !== null ? (/\d/.test(obj.b) ? obj.b : `b`) : ""}
                </span>
                <span className="dimension-a">
                  {obj.a !== null ? (/\d/.test(obj.a) ? obj.a : `a`) : ""}
                </span>
                <span className="dimension-s">
                  {obj.s !== null ? (/\d/.test(obj.s) ? obj.s : `s`) : ""}
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex-column-dev">
          <div className="flex-column-dev">
            <div className="flex-tops">
              <label>
                <span>Металл</span>
                <select
                  name="metal"
                  className="calc-inp w-100"
                  onChange={handleMetalChange}
                >
                  <option value="">- Металл -</option>
                  <option value="steel">Сталь</option>
                  <option value="stainless-steel">Нержавеющая сталь</option>
                  <option value="aluminium">Алюминий</option>
                  <option value="brass">Латунь</option>
                  <option value="cuprum">Медь</option>
                  <option value="bronze">Бронза</option>
                  <option value="titanium">Титан</option>
                  <option value="cast-iron">Чугун</option>
                  <option value="aurum">Золото</option>
                  <option value="plumbum">Свинец</option>
                  <option value="magnesium">Магний</option>
                  <option value="nickel">Никель</option>
                  <option value="palladium">Палладий</option>
                  <option value="platinum">Платина</option>
                  <option value="silver">Серебро</option>
                  <option value="tin">Олово</option>
                  <option value="zinc">Цинк</option>
                </select>
              </label>
            </div>
            <div className="calc-fleft">
              <label>
                <span>Марка</span>
                <select
                  name="material"
                  className="calc-inp w-100"
                  onChange={handleMaterialChange}
                >
                  <option value="">- Марка -</option>
                  {materials.map((material) => (
                    <option key={material.id} value={material.id}>
                      {material.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="calc-fleft">
              <label>
                <span>Плотность (кг/м³)</span>
                <input
                  type="number"
                  name="density"
                  className="calc-inp w-100"
                  value={obj.ro}
                  onChange={(e) => {
                    const newRo = parseFloat(e.target.value);
                    setObj({ ...obj, ro: newRo });
                    onDataUpdate({ ...obj, ro: newRo });
                  }}
                  placeholder="Плотность"
                  required
                />
              </label>
            </div>

            <div className="calc-frow">
              <div className="calc-fright">
                <figure>
                  <img
                    src="/ugolok.png"
                    alt="Расчет веса уголка"
                    title="Расчет веса уголка"
                    loading="lazy"
                    decoding="async"
                    width="150"
                    height="171"
                  />
                </figure>
                <div className="dimensions-container">
                  <span className="dimension-b">
                    {obj.b !== null ? (/\d/.test(obj.b) ? obj.b : `b`) : ""}
                  </span>
                  <span className="dimension-a">
                    {obj.a !== null ? (/\d/.test(obj.a) ? obj.a : `a`) : ""}
                  </span>
                  <span className="dimension-s">
                    {obj.s !== null ? (/\d/.test(obj.s) ? obj.s : `s`) : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="calc-fleft">
              <label>
                <span> Ширина уголка (a)</span>
                <input
                  type="number"
                  name="width"
                  className="calc-inp w-100"
                  onChange={handleWidthChange}
                  placeholder=" Ширина уголка (a)"
                  required
                />
              </label>
            </div>
            <div className="calc-fleft">
              <label>
                <span> Высота уголка (b)</span>
                <input
                  type="number"
                  name="height"
                  className="calc-inp w-100"
                  onChange={handleHeightChange}
                  placeholder="  Высота уголка (b)"
                  required
                  step="0.01"
                />
              </label>
            </div>
            <div className="calc-fleft">
              <label>
                <span> Толщина уголка (s)</span>
                <input
                  type="number"
                  name="thickness"
                  className="calc-inp w-100"
                  onChange={handleThicknessChange}
                  placeholder="  Толщина уголка (s)"
                  required
                  step="0.01"
                />
              </label>
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

export default Ugolok;
