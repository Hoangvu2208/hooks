import "./App.css";
import React, { useState } from "react";
function App() {
  const carList = ["Toyota", "BMW", "Volvo", "Ford"];
  const colorList = ["Green", "Red", "Black", "Blue"];

  const [selectedCar, setSelectedCar] = useState({
    car: carList[0],
    color: colorList[0],
  });

  const handleChangeCar = (e) => {
    const car = e.target.value;
    console.log(car);
    const color = selectedCar.color;
    setSelectedCar({
      car: car,
      color: color,
    });
  };

  const handleChangeColor = (e) => {
    const color = e.target.value;
    const car = selectedCar.car;
    setSelectedCar({
      car: car,
      color: color,
    });
  };
  return (
    <>
      {console.log(selectedCar)}

      <label htmlFor="">Choose your car:</label>
      <select name="" id="" onChange={(e) => handleChangeCar(e)}>
        {carList.map((car, index) => (
          <option value={car}>{car}</option>
        ))}
      </select>
      <br />
      <label htmlFor="">Choose your color:</label>

      <select name="" id="" onChange={(e) => handleChangeColor(e)}>
        {colorList.map((color, index) => (
          <option value={color}>{color}</option>
        ))}
      </select>

      <div className="result">
        <p>
          Ban da chon xe {selectedCar.color} - {selectedCar.car}
        </p>
      </div>
    </>
  );
}

export default App;
