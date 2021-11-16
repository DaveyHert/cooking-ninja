import "./Search.css";
import { useLocation } from "react-router";
import RecipeList from "../../components/RecipeList";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      projectFirestore
        .collection("recipes")
        .where("title", "==", `${query}`)
        .get()
        .then((snapshot) => {
          console.log(snapshot);
        });
    } catch (err) {
      setError(err.message);
    }
  }, []);
  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
