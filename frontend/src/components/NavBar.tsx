import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="font-bold border p-2 flex justify-between">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex gap-3">
        <NavLink to="/dashboard">Dashboad</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
