export default function IngredientSection(props) {

    const ingredientsListItem = props.ingredients.map(ingredient => <li>{ingredient}</li>)

    return (
        <>
            <section className="get-recipe-section">
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">
                    {ingredientsListItem}
                </ul>
                {props.ingredients.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for Recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button className="get-recipe-button"
                        onClick={props.toggleRecipeShown}>Get a recipe</button>
                </div>}
            </section>
        </>
    )
}