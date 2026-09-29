import { Link } from "react-router-dom";

import { courses } from "../data/courses";


export default function Courses() {

  return (

    <section className="page courses-page">

      <h1 className="section-title">
        Available Courses
      </h1>


      <div className="course-grid">

        {courses.map((course) => (

          <article
            className="course-card"
            key={course.id}
          >

            <h2>
              {course.name}
            </h2>


            <p>
              {course.description}
            </p>


            <p className="duration">

              <strong>
                Duration:
              </strong>{" "}

              {course.duration}

            </p>


            <Link
              to={`/courses/${course.id}`}
              className="primary-btn"
            >
              View Course
            </Link>

          </article>

        ))}

      </div>

    </section>

  );
}