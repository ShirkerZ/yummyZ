import React from "react";
import { useState } from "react";

function Form({ setQuery, fetchQuery }) {

  const [input, setInput] = useState("");

  const updateSearch = (e) => {
    setInput(e.target.value);
  };

  const getQuery = (e) => {
    e.preventDefault();
    console.log('Submit')
    setQuery(input);
    setInput("");

  };

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
