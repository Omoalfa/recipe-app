import './Recipe.css'

const Recipe = ({title, image, ingredients}) => {
    return (
        <div className="recipe-card">
            <h2 className="recipe-title">{title}</h2>
            <img src={image} alt={`${title} image`} />
            <h3>ingredients:</h3>
            <ol className="recipe-list">
                {ingredients.map(ingredient => (
                    <li className="ingredient">{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe