import "./Home.css";
import useFetch from "../../components/hooks/useFetch";
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const { data, isLoading, error } = useFetch("http://localhost:3000/recipes");
  console.log(data);

  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isLoading && <p className='loading'>Loading...</p>}

      {data && <RecipeList recipes={data} />}
    </div>
  );
}
