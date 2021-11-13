import "./Search.css";
import { useLocation } from "react-router";
import useFetch from "../../components/hooks/useFetch";
import RecipeList from "../../components/RecipeList";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const {
    data: recipes,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/recipes?q=${query}`);

  return (
    <div>
      <h2 className='page-title'>Recipes including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
