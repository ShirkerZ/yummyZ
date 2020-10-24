import React from "react";
import { useState, useEffect } from "react";

function Form({query, setQuery, setFoods }) {

  const [input, setInput] = useState("");

  const updateSearch = (e) => {
    console.log(e.target.value)
    setInput(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    setQuery(input);
    setInput("");

  };

  const fetchQuery = async () => {
    const data = await fetch(
      //`https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=70671307c3744680a714e6bb1f1ef888`
      `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=579fa834feda4f31839cab3ab97f179d`
      );
    const foods = await data.json();
    setFoods(foods.results);
  };

  useEffect(() => {
    fetchQuery();
  }, [query]);

  return (
    <div className="form">
      <form action="" onSubmit={getQuery}>
        <div className="input">
          <input
            type="text"
            placeholder="Search"
            onChange={updateSearch}
            value={input}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
