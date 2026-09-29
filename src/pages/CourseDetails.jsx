import { Link, useParams } from "react-router-dom";

import { courses } from "../data/courses";


export default function CourseDetails() {

  const { courseId } = useParams();


  const course = courses.find(
    (item) => item.id === courseId
  );


  // If course doesn't exist

  if (!course) {

    return (

      <section className="page">

        <div className="white-card">

          <h1>
            Course Not Found
          </h1>


          <Link
            to="/courses"
            className="primary-btn"
          >
            ← Back to Courses
          </Link>

        </div>

      </section>

    );
  }


  return (

    <section className="page course-details-page">

      <div className="white-card details-card">

        <h1>
          Course Details
        </h1>


        <h2 className="course-name">
          {course.name.toUpperCase()}
        </h2>


        <p>
          You selected the{" "}
          <strong>
            {course.id}
          </strong>{" "}
          course.
        </p>


        <p>

          <strong>
            Course ID:
          </strong>{" "}

          {course.id}

        </p>


        <h3>
          Topics
        </h3>


        <ul className="topics-list">

          {course.topics.map((topic) => (

            <li key={topic}>
              {topic}
            </li>

          ))}

        </ul>


        <Link
          to="/courses"
          className="primary-btn"
        >
          ← Back to Courses
        </Link>

      </div>

    </section>

  );
}