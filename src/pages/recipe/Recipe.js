import "./Recipe.css";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
import useTheme from "../../components/hooks/useTheme";

export default function Recipe() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { nightMode } = useTheme();

  const goBack = () => navigate(-1);

  const {
    data: recipe,
    isLoading,
    error,
  } = useFetch(`http://localhost:3000/recipes/${id}`);

  return (
    <div>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}
      {recipe && (
        <div className={`recipe ${nightMode ? "dark-mode" : ""}`}>
          <button className='go-back' onClick={goBack}>
            Back
          </button>
          <h2 className='page-title'>{recipe.title}</h2>
          <p>{recipe.cookingTime} to cook</p>
          <h4>Ingredients</h4>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <h4>Method:</h4>
          <p className='method'>{recipe.method}</p>
        </div>
      )}
    </div>
  );
}
