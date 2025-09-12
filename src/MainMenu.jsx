import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientSection from "./IngredientSection"
export default function MainMenu() {

    const [recipeShown, setRecipeShown] = React.useState(false)
    const [ingredients, setIngredients] = React.useState([])

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
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
                        toggleRecipeShown={toggleRecipeShown} />}
                {recipeShown && <ClaudeRecipe />}
            </main >
        </>
    )
}