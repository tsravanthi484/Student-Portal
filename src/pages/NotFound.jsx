import { Link } from "react-router-dom";


export default function NotFound() {

  return (

    <section className="page">

      <div className="white-card">

        <h1>
          404 - Page Not Found
        </h1>


        <p>
          The page you are looking for
          does not exist.
        </p>


        <Link
          to="/"
          className="primary-btn"
        >
          Go Home
        </Link>

      </div>

    </section>

  );
}