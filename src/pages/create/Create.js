import "./Create.css";
import { useState, useRef } from "react";
import useFetch from "../../components/hooks/useFetch";
import { useNavigate } from "react-router";
import { useEffect } from "react/cjs/react.development";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingInputRef = useRef(null);
  const navigator = useNavigate();

  const { postData, data } = useFetch("http://localhost:3000/recipes", "POST");

  const handleSubmit = (e) => {
    e.preventDefault();

    postData({
      title,
      method,
      ingredients,
      cookingTime: cookingTime + " minutes",
    });
  };

  // redirect user if data is successsfully updated
  useEffect(() => {
    if (data) {
      navigator("/");
    }
  }, [data, navigator]);

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, ing]);
    }
    setNewIngredient("");
    ingInputRef.current.focus();
  };

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingInputRef}
            />
            <button className='btn' onClick={handleAdd}>
              Add
            </button>
          </div>
        </label>
        {ingredients && (
          <p>
            Current Ingredients:{" "}
            {ingredients.map((ing) => (
              <em key={ing}>{ing}, </em>
            ))}
          </p>
        )}
        <label>
          <span>Method</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type='number'
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  );
}

export default Create;
