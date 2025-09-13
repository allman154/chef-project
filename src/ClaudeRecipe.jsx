import ReactMarkdown from "react-markdown"
export default function ClaudeRecipe(props) {
    return (
        <>
            <section className="cc-recipe-section">
                <div className="cc-recipe-container">
                    <h2>ChefClaude Recommends</h2>
                    <p>Based on your ingredients, here’s an idea you can try:</p>
                    <ReactMarkdown>{props.recipe}</ReactMarkdown>
                </div>
            </section>
        </>
    )
}