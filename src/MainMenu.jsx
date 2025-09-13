import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientSection from "./IngredientSection"
import { getRecipeFromMistral } from "./chefAi"
export default function MainMenu() {

    console.log("HF key present:", !!import.meta.env.VITE_HF_API_KEY);
    const [recipe, setRecipe] = React.useState("")
    const [ingredients, setIngredients] = React.useState([])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    /* since the API function is async, we will make the function ASYNC, and AWAIT the response */
    async function getRecipe() {
        const recipeMarkDown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkDown)
    }

    return (
        <>
            <main>
                <form className="add-ingredient-form"
                    action={addIngredient}>
                    <input type="text"
                        placeholder="Enter ingredient..."
                        name="ingredient" />
                    <button>Add Ingredient</button>
                </form>
                {ingredients.length > 0 &&
                    <IngredientSection
                        ingredients={ingredients}
                        getRecipe={getRecipe} />}
                {recipe && <ClaudeRecipe recipe={recipe} />}
            </main >
        </>
    )
}