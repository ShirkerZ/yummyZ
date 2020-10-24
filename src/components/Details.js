import React, { useState, useEffect } from "react";
import Nutrition from './Nutrition.js';
import Ingredients from './Ingredients.js';
import Recipe from './Recipe.js';

function Details({ match }) {
    useEffect(() => {
        fetchRecipe();
        //console.log(`Image: ${ingredients.image}`)

    }, []);

    const [details, setDetails] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [calories, setCalories] = useState([]);
    const [carbo, setCarbo] = useState([]);
    const [protein, setProtein] = useState([]);
    const [instructions, setInstructions] = useState([]);

    const fetchRecipe = async() => {
        const data = await fetch(
            //`https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=70671307c3744680a714e6bb1f1ef888&includeNutrition=true`
            `https://api.spoonacular.com/recipes/${match.params.id}/information?apiKey=579fa834feda4f31839cab3ab97f179d&includeNutrition=true`
        );
        const details = await data.json();
        console.log(details);
        console.log(details.extendedIngredients);

        console.log(details.nutrition.nutrients[0]);
        console.log(details.nutrition.nutrients[4]);
        console.log(details.nutrition.nutrients[8]);
        console.log(details.instructions);
        console.log(match);
        setDetails(details);
        setIngredients(details.extendedIngredients);
        setCalories(details.nutrition.nutrients[0]);
        setCarbo(details.nutrition.nutrients[4]);
        setProtein(details.nutrition.nutrients[8]);
        setInstructions(details.instructions);


    };

    return ( <
        div className = "food-details" >
        <
        div className = "container" >
        <
        h1 className = "food-name" > { details.title } < /h1> <
        img className = 'food-image'
        src = { details.image }
        alt = "" / >
        <
        Nutrition calories = { calories }
        carbo = { carbo }
        protein = { protein }
        /> <
        Ingredients ingredients = { ingredients }
        /> <
        Recipe instructions = { instructions }
        />

        <
        /div> < /
        div >
    );
}

export default Details;