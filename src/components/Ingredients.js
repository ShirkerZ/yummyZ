import React from "react";

function Ingredients({ ingredients }) {
  console.log(ingredients.image);
  console.log(ingredients.name);

  return (
    <div className="ingredients">
      <div className="container">
        <h2 className="ingredients-title">Ingredients</h2>
        <div className="ingredients-container">
          {ingredients.map((ingredient) => (
            <div className="ingredient-card">
              <img src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.image}/>
              <div className="ingredient-info">
                <div className="info">
                  <h3>
                    {ingredient.name.charAt(0).toUpperCase() +
                      ingredient.name.slice(1)}
                  </h3>
                  <p>{ingredient.unit}</p>
                </div>
                <p className="amount">{ingredient.amount.toFixed(1)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
