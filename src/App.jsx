import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";


function ProtectedRoute({ children }) {
  const loggedIn =
    localStorage.getItem("studentLoggedIn") === "true";

  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


function App() {
  return (
    <div className="app">

      <Navbar />

      <main>

        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Courses */}
          <Route
            path="/courses"
            element={<Courses />}
          />

          {/* Individual Course */}
          <Route
            path="/courses/:courseId"
            element={<CourseDetails />}
          />

          {/* Login */}
          <Route
            path="/login"
            element={<Login />}
          />

          {/* Protected Dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Invalid URL */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>

      </main>

    </div>
  );
}

export default App;