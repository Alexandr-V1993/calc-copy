import React, { useState, useEffect } from "react";

function TrubaKruglaya({ onDataUpdate }) {
  const [diam, setDiam] = useState(true);
  const [obj, setObj] = useState({
    d: null,
    t: null,
    ro: 7850,
    length: "",
    type: "pipe",
    specificationId: null,
  });
  const [standards, setStandards] = useState([]);
  const [specifications, setSpecifications] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [metal, setMetal] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch(
      "https://calcoffee.ru/api/metal/standards?type=pipe&metal=steel&subtype=round"
    )
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
        `https://calcoffee.ru/api/metal/specifications?standardId=${selectedStandardId}&type=pipe&subtype=round`
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
      const {
        a,
        b,
        s,
        name,
        h,
        id,
        weight,
        materialId,
        ...filteredSpecification
      } = selectedSpecification;

      const updatedObj = {
        ...filteredSpecification,
        type: "pipe",
        specificationId: selectedSpecificationId,
        length: obj.length,
        d: filteredSpecification.d,
        t: s, // используем значение s для t
        ro: obj.ro,
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
      const { materialId, ...updatedObj } = obj; // Исключаем materialId из объекта
      const updatedObjWithMaterial = {
        ...updatedObj,
        ro: selectedMaterial.ro,
      };
      setObj(updatedObjWithMaterial);
      onDataUpdate(updatedObjWithMaterial);
    }
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

  const handleHeightChange = (e) => {
    const newHeight = e.target.value;
    const updatedObj = {
      ...obj,
      t: newHeight,
    };
    setObj(updatedObj);
    onDataUpdate(updatedObj);
  };

  const clickDiam = (isDiam) => {
    if (diam !== isDiam) {
      setDiam(isDiam);
      if (!isDiam) {
        const { specificationId, a, b, ...updatedObj } = obj;
        setObj({ ...updatedObj, ro: 7850 });
        onDataUpdate({ ...updatedObj, ro: 7850 });
      } else {
        setObj((prevObj) => ({ ...prevObj, ro: 7850 }));
        onDataUpdate({ ...obj, ro: 7850 });
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
                    {specification.d}x{specification.s}
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
                  src="/trubacrug.png"
                  alt="Размер круглой трубы"
                  title="Размер круглой трубы"
                  loading="lazy"
                  decoding="async"
                  width="150"
                  height="171"
                />
              </figure>
              <div className="dimensions-container">
                <span className="dimension-t-trubacrug">
                  {obj.t !== null ? (/\d/.test(obj.t) ? obj.t : `t`) : ""}
                </span>
                <span className="dimension-d-trubacrug">
                  {obj.d !== null ? (/\d/.test(obj.d) ? obj.d : `d`) : ""}
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
                    src="/trubacrug.png"
                    alt=""
                    title="Размер круглой трубы"
                    loading="lazy"
                    decoding="async"
                    width="150"
                    height="171"
                  />
                </figure>
                <div className="dimensions-container">
                  <span className="dimension-t-trubacrug">
                    {obj.t !== null ? (/\d/.test(obj.t) ? obj.t : `t`) : ""}
                  </span>
                  <span className="dimension-d-trubacrug">
                    {obj.d !== null ? (/\d/.test(obj.d) ? obj.d : `d`) : ""}
                  </span>
                </div>
              </div>
            </div>
            <div className="calc-fleft">
              <label>
                <span>Диаметр трубы (d)</span>
                <input
                  type="number"
                  name="width"
                  className="calc-inp w-100"
                  onChange={handleWidthChange}
                  placeholder="Диаметр"
                  required
                  step="0.01"
                />
              </label>
            </div>
            <div className="calc-fleft">
              <label>
                <span>Толщина стенки (t)</span>
                <input
                  type="number"
                  className="calc-inp w-100"
                  onChange={handleHeightChange}
                  placeholder="Толщина"
                  step="0.01" // Устанавливаем шаг в 0.01, чтобы допускать дробные числа
                  required
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

export default TrubaKruglaya;
