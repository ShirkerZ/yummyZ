import React from "react";
import { Link } from "react-router-dom";

function Foods({ foods }) {
  console.log(foods);
  console.log('FOODS');
  const cardStyle = {
    textDecoration: "none",
  };

  return (
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
  );
}

export default Foods;
