import {useState, useEffect} from 'react'
import Recipe from './Recipe'


function App() {
    const APP_ID = "8f8bc032"
    const APP_KEY = "21f87647a36b848d7e2dad24acd9cef2"
    
    const [states, setStates] = useState([]);
    
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState("chicken")
    
    useEffect(() => {
        fetchRecipes()
    }, [query])
    
    const fetchRecipes = async () => {
        
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        console.log(data)
        setStates(data.hits);
    }
    
    const getSearch = (e) => {
        e.preventDefault()
        
        setQuery(search)
    }
    
    
    
    
  return (
    <div className="App">
      <form onSubmit={getSearch} >
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button type="submit" >Search</button>
      </form>
      <div>
        { states.map(recipe => (
            <Recipe title={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} />
        )) }
      </div>
    </div>
  );
}

export default App;
