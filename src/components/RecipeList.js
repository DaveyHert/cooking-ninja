import { Link } from "react-router-dom";
import useTheme from "./hooks/useTheme";
import "./RecipeList.css";

function RecipeList({ recipes }) {
  const { nightMode } = useTheme();
  if (recipes.length === 0) {
    return <div className='error'>No recipe found...</div>;
  }
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => (
        <div className={`card ${nightMode && "dark-mode"}`} key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
