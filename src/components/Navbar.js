import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/'>
          <h1>Cooking Ninja</h1>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
