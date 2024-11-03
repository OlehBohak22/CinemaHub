import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const isAuth = false;

  const activeStyles = {
    color: "white",
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center w-6 h-6 bg-gray-600 text-xs text-white rounded-sm">
        E
      </span>
      {isAuth && (
        <ul className="flex gap-16">
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              to="/"
              className="text-xl text-gray-400 hover:text-white"
            >
              Головна
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              to="/posts"
              className="text-xl text-gray-400 hover:text-white"
            >
              Мої пости
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
              to="/new"
              className="text-xl text-gray-400 hover:text-white"
            >
              Додати пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? <button>Вийти</button> : <Link to="/login">Вхід</Link>}
      </div>
    </div>
  );
};
