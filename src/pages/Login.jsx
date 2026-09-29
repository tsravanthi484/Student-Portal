import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();


  const handleLogin = () => {

    // Save login state

    localStorage.setItem(
      "studentLoggedIn",
      "true"
    );


    // Go to dashboard

    navigate("/dashboard");

    // Refresh navbar so Dashboard/Logout appear

    window.location.reload();
  };


  return (

    <section className="page login-page">

      <div className="login-card">

        <h1>
          Student Login
        </h1>


        <p>
          Login to access your student dashboard.
        </p>


        <button
          className="primary-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </section>

  );
}