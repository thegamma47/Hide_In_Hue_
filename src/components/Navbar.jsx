import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-primary text-primary-content">
        
        <div className="navbar-start">
  <Link to="/" className="btn btn-ghost text-xl">Hide In Hue</Link>
  </div>
    <div className="navbar-end flex items-center gap-6">
    <ul className="menu menu-horizontal px-1">
      <li><a>Features</a></li>
      <li><a>Demo</a></li>
      <li><a>Contact</a></li>
    </ul>

    <div className="flex gap-3">
      <Link to="/login">
    <button className="btn btn-neutral">Log In</button>
    </Link>
    <Link to="/signup">
    <button className="btn btn-neutral">Sign Up</button>
    </Link>
    </div>
  </div>
  
</div>       
    </>
  )
}

export default Navbar;
