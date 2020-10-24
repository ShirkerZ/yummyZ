import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home({setFoods}) {

  const [mealType, setMealType] = useState("breakfast");

  const searchType = (e) => {
    setMealType(e.target.dataset.type);

  };

  const fetchFoods = async () => {
    const data = await fetch(
      //`https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&apiKey=70671307c3744680a714e6bb1f1ef888`
      `https://api.spoonacular.com/recipes/complexSearch?type=${mealType}&apiKey=579fa834feda4f31839cab3ab97f179d`
      );
    const foods = await data.json();
    setFoods(foods.results);
  };

  useEffect(() => {
    fetchFoods();
  }, [mealType]);

  return (
    //    MEAL TYPES
    <div className="home">
    <div className="container">
    <div className="meal-type-container">
        <div className="meal-type-card" data-type="main course" onClick={searchType} >
          <img src={"./img/main-course.jpg"} alt="" />
          <div className="tape">
            <h3>Main Course</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="salad" onClick={searchType}>
          <img src={"./img/salad.jpg"} alt="" />
          <div className="tape">
            <h3>Salad</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="soup" onClick={searchType}>
          <img src={"./img/soup.jpg"} alt="" />
          <div className="tape">
            <h3>Soup</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="dessert" onClick={searchType}>
          <img src={"./img/dessert.jpg"} alt="" />
          <div className="tape">
            <h3>Dessert</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="breakfast" onClick={searchType}>
          <img src={"./img/breakfast.jpg"} alt="" />
          <div className="tape">
            <h3>Breakfast</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="bread" onClick={searchType}>
          <img src={"./img/bread.jpg"} alt="" />
          <div className="tape">
            <h3>Bread</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="appetizer" onClick={searchType}>
          <img src={"./img/appetizer.jpg"} alt="" />
          <div className="tape">
            <h3>Appetizer</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="beverage" onClick={searchType}>
          <img src={"./img/beverage.jpg"} alt="" />
          <div className="tape">
            <h3>Beverage</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="sauce" onClick={searchType}>
          <img src={"./img/sauce.jpg"} alt="" />
          <div className="tape">
            <h3>Sauce</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="marinade" onClick={searchType}>
          <img src={"./img/marinade.jpg"} alt="" />
          <div className="tape">
            <h3>Marinade</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="fingerfood" onClick={searchType}>
          <img src={"./img/fingerfood.jpg"} alt="" />
          <div className="tape">
            <h3>Fingerfood</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="side dish" onClick={searchType}>
          <img src={"./img/side-dish.jpg"} alt="" />
          <div className="tape">
            <h3>Side Dish</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="snack" onClick={searchType}>
          <img src={"./img/snack.jpg"} alt="" />
          <div className="tape">
            <h3>Snack</h3>
          </div>
        </div>

        <div className="meal-type-card" data-type="drink" onClick={searchType}>
          <img src={"./img/drink.jpg"} alt="" />
          <div className="tape">
            <h3>Drink</h3>
          </div>
        </div>

      </div>
{/*
      <div className="food-container">
        {foods.map((food) => (
          <Link to={`/${food.id}`} style={cardStyle}>
            <div className="food-card">
              <img src={food.image} alt="" />
              <h3> {food.title} </h3>
            </div>
          </Link>
        ))}
      </div> */}
    </div>
     
    </div>
  );
}

export default Home;
