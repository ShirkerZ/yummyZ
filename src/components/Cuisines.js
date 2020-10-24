import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cuisines({ setFoods }) {

  const [cuisine, setCuisine] = useState("italian");

  const searchCuisine = (e) => {
    console.log(e.target.dataset.cuisine);
    setCuisine(e.target.dataset.cuisine);
  };

  const fetchCuisines = async () => {
    const data = await fetch(
      //`https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=70671307c3744680a714e6bb1f1ef888`
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=579fa834feda4f31839cab3ab97f179d`
    );
    const foods = await data.json();
    console.log(foods);
    setFoods(foods.results);
  };

  useEffect(() => {
    fetchCuisines();
  }, [cuisine]);

    return (
      <div className="cuisines">
        <div className="container">
          <div className="cuisine-container">

              <div className="cuisine-card" data-cuisine="italian" onClick={searchCuisine}>
              
                <img src={"./img/food-italian.jpg"} alt="" />
                <div className="tape">
                  <h3>Italian</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="french" onClick={searchCuisine}>
                <img src={"./img/food-french.jpg"} alt="" />
                <div className="tape">
                  <h3>French</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="chinese" onClick={searchCuisine}>
                <img src={"./img/food-chinese.jpg"} alt="" />
                <div className="tape">
                  <h3>Chinese</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="indian" onClick={searchCuisine}>
                <img src={"./img/food-indian.jpg"} alt="" />
                <div className="tape">
                  <h3>Indian</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="japanese" onClick={searchCuisine}>
                <img src={"./img/food-japanese.jpg"} alt="" />
                <div className="tape">
                  <h3>Japanese</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="german" onClick={searchCuisine}>
                <img src={"./img/food-german.jpg"} alt="" />
                <div className="tape">
                  <h3>German</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="korean" onClick={searchCuisine}>
                <img src={"./img/food-korean.jpg"} alt="" />
                <div className="tape">
                  <h3>Korean</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="spanish" onClick={searchCuisine}>
                <img src={"./img/food-spanish.jpg"} alt="" />
                <div className="tape">
                  <h3>Spanish</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="American" onClick={searchCuisine}>
                <img src={"./img/food-american.jpg"} alt="" />
                <div className="tape">
                  <h3>American</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="thai" onClick={searchCuisine}>
                <img src={"./img/food-thai.jpg"} alt="" />
                <div className="tape">
                  <h3>Thai</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="latin american" onClick={searchCuisine}>
                <img src={"./img/food-latin-american.jpg"} alt="" />
                <div className="tape">
                  <h3>Latin American</h3>
                </div>
              </div>

              <div className="cuisine-card" data-cuisine="middle eastern" onClick={searchCuisine}>
                <img src={"./img/food-middle-eastern.jpg"} alt="" />
                <div className="tape">
                  <h3>Middle Eastern</h3>
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
            </div>
*/}
        </div>   
    </div>
    );
}

export default Cuisines;