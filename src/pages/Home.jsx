import { Link } from "react-router-dom";


export default function Home() {

  return (

    <section className="page home-page">

      <div className="hero-card">

        <h1>
          Welcome to Student Portal
        </h1>


        <p>
          Learn programming, explore courses,
          and manage your student profile.
        </p>


        <Link
          to="/courses"
          className="primary-btn"
        >
          Explore Courses
        </Link>

      </div>

    </section>

  );
}