import React from "react";
import { Link } from "react-router-dom";

function Foods({ foods, cardStyle }) {
  return (
    <div className="food">
      <div className="food-container">
        {foods.map((food) => (
          <Link to={`/${food.id}`} style={cardStyle}>
            <div className="food-card">
              <img src={food.image} alt="" />
              <h3> {food.title} </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Foods;
