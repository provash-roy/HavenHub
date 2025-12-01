import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Main = () => {
  return (
    <div className="text-center">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Main;
