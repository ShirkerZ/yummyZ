import React from "react";

function Recipe({ instructions }) {

  return (
    <div className="recipe">
      <div className="container">
        <h2 className="recipe-title">Recipe Preparation</h2>

        <p dangerouslySetInnerHTML={{ __html: instructions }} />
      </div>
    </div>
  );
}

export default Recipe;
