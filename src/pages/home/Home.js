import "./Home.css";
import RecipeList from "../../components/RecipeList";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsLoading(true);

    projectFirestore
      .collection("recipes")
      .get()
      .then((snapshot) => {
        let recipes = [];
        if (snapshot.empty) {
          setIsLoading(false);
          setError("No recipes found");
        } else {
          snapshot.docs.forEach((item) =>
            recipes.push({ id: item.id, ...item.data() })
          );

          setIsLoading(false);
          setData(recipes);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}

      {data && <RecipeList recipes={data} />}
    </div>
  );
}
