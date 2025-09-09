import React from "react"
import Recipe from "./Recipe"
export default function MainMenu() {
    const [recipeShown, setRecipeShown] = React.useState(false)
    const ingredients = []
    const [ingredientList, setIngredientList] = React.useState([...ingredients])
    const ingredientsListItem = ingredientList.map(ingredient =>
        <li>{ingredient}</li>)

    //THIS WOULD BE IF WE USED THE ONSUBMIT ON ThE FORM INSTEAD OF ACTION - 
    // ACTION ALLOWS FOR A MORE CLEAN (JSF REMINICENT) WAY OF HANDLING THIS. 
    /*function handleFormSubmit(event) {
        //prevent the page from refreshing - this would also change the URL to include ?ingredientname
        event.preventDefault()
        //Grab the value that is submitted on the FORM from the EVENT passed in
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("Ingredient")
        setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient])
    }*/
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient])
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
                {ingredientList.length > 0 && <section className="get-recipe-section">
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredientsListItem}
                    </ul>
                    {ingredientList.length > 3 && <div className="get-recipe-container">
                        <div>
                            <h3>Ready for Recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>
                        <button className="get-recipe-button"
                            onClick={toggleRecipeShown}>Get a recipe</button>
                    </div>}
                </section>}
                {recipeShown && <Recipe />}
            </main >
        </>
    )
}