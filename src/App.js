import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Styles
import "./App.css";

// Routes
import Home from "./pages/home/Home";
import Create from "./pages/create/Create";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <nav className='nav'>
          <Link to='/'>Home</Link>
          <Link to='/create'>Create</Link>
          <Link to='/recipe'>Recipe</Link>
          <Link to='/search'>Search</Link>
        </nav>
        <h1>Hi</h1>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
