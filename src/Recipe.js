const Recipe = ({title, image, ingredients}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={`${title} image`} />
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe