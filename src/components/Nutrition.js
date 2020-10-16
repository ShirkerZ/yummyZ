import React from "react";

function Nutrition({ calories, carbo, protein }) {
  return (
    <div className="nutrition">
      <div className="container">
        <h2 className="nutrition-title">Nutritions</h2>
        {/* CALORIES */}
        <div className="nutrient-type">
          <div className="amount">
            <div className="circle">
              <p>{Math.floor(calories.amount)}</p>
            </div>
          </div>
          <div className="nutrient">
            <h3>{calories.title}</h3>
            <p>{calories.unit}</p>
          </div>
        </div>
        {/* CARBO */}
        <div className="nutrient-type">
          <div className="amount">
            <div className="circle">
              <p>{Math.floor(carbo.amount)}</p>
            </div>
          </div>
          <div className="nutrient">
            <h3>Carbo</h3>
            <p>{carbo.unit}</p>
          </div>
        </div>
        {/* PROTEIN */}
        <div className="nutrient-type">
          <div className="amount">
            <div className="circle">
              <p>{Math.floor(protein.amount)}</p>
            </div>
          </div>
          <div className="nutrient">
            <h3>{protein.title}</h3>
            <p>{protein.unit}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nutrition;
