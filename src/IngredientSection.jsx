export default function IngredientSection(props) {

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredientList(prevIngredientList => [...prevIngredientList, newIngredient])
    }
    
    return (
        <>
            {props.ingredientListLength > 0 && <section className="get-recipe-section">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {props.ingredientsListItem}
                </ul>
                {props.ingredientListLength > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for Recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="get-recipe-button"
                        onClick={props.handleClick}>Get a recipe</button>
                </div>}
            </section>}
        </>
    )
}