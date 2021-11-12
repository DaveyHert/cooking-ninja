import "./Create.css";
import { useState, useRef } from "react";

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredents, setIngredients] = useState([]);
  const ingInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = { title, method, cookingTime };
    console.log(recipe);
  };

  console.log(ingInputRef);
  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredents.includes(ing)) {
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
<<<<<<< HEAD
        {ingredents && (
          <p>
            Current Ingredients:{" "}
            {ingredents.map((ing) => (
              <em key={ing}>{ing}, </em>
            ))}
          </p>
        )}
=======
>>>>>>> 4a7f48541e37fa34a8134ad5514716e46750f55e
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
