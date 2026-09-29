import { NavLink, useNavigate } from "react-router-dom";


export default function Navbar() {

  const navigate = useNavigate();


  const loggedIn =
    localStorage.getItem("studentLoggedIn") === "true";


  const handleLogout = () => {

    localStorage.removeItem("studentLoggedIn");

    navigate("/login");

    window.location.reload();
  };


  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;


  return (

    <header className="navbar">

      {/* Logo / Brand */}

      <div className="brand">
        Student Portal
      </div>


      {/* Navigation */}

      <nav className="nav-menu">

        <NavLink
          to="/"
          className={navClass}
        >
          Home
        </NavLink>


        <NavLink
          to="/courses"
          className={navClass}
        >
          Courses
        </NavLink>


        {loggedIn ? (

          <>

            <NavLink
              to="/dashboard"
              className={navClass}
            >
              Dashboard
            </NavLink>


            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>

          </>

        ) : (

          <NavLink
            to="/login"
            className={navClass}
          >
            Login
          </NavLink>

        )}

      </nav>

    </header>
  );
}