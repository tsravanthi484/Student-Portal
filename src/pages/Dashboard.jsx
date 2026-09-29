import { useState } from "react";


export default function Dashboard() {

  const [activeTab, setActiveTab] =
    useState("overview");


  const [emailNotifications, setEmailNotifications] =
    useState(true);


  const [courseReminders, setCourseReminders] =
    useState(false);


  return (

    <section className="page dashboard-page">


      {/* Dashboard Heading */}

      <div className="dashboard-header">

        <h1>
          Student Dashboard
        </h1>

        <p>
          Manage your student account.
        </p>

      </div>


      {/* Dashboard Tabs */}

      <div className="tabs">


        <button
          className={
            activeTab === "overview"
              ? "tab active-tab"
              : "tab"
          }
          onClick={() =>
            setActiveTab("overview")
          }
        >
          Overview
        </button>


        <button
          className={
            activeTab === "profile"
              ? "tab active-tab"
              : "tab"
          }
          onClick={() =>
            setActiveTab("profile")
          }
        >
          Profile
        </button>


        <button
          className={
            activeTab === "settings"
              ? "tab active-tab"
              : "tab"
          }
          onClick={() =>
            setActiveTab("settings")
          }
        >
          Settings
        </button>

      </div>


      {/* Dashboard Content */}

      <div className="dashboard-card">


        {/* =========================
             OVERVIEW
        ========================== */}

        {activeTab === "overview" && (

          <>

            <h2>
              Dashboard Overview
            </h2>


            <div className="stats-grid">


              <div className="stat-box">

                <strong>
                  4
                </strong>

                <span>
                  Enrolled Courses
                </span>

              </div>


              <div className="stat-box">

                <strong>
                  82%
                </strong>

                <span>
                  Average Progress
                </span>

              </div>


              <div className="stat-box">

                <strong>
                  12
                </strong>

                <span>
                  Assignments
                </span>

              </div>


            </div>


            <p className="welcome-message">

              Welcome back!
              Continue your learning journey.

            </p>

          </>

        )}


        {/* =========================
             PROFILE
        ========================== */}

        {activeTab === "profile" && (

          <>

            <h2>
              My Profile
            </h2>


            <div className="profile-box">

              <p>

                <strong>
                  Name:
                </strong>{" "}

                T.Sravanthi

              </p>


              <p>

                <strong>
                  Email:
                </strong>{" "}

                sravanthi234@gmail.com

              </p>


              <p>

                <strong>
                  Course:
                </strong>{" "}

                Data Science

              </p>


              <p>

                <strong>
                  Year:
                </strong>{" "}

                4th Year

              </p>

            </div>

          </>

        )}


        {/* =========================
             SETTINGS
        ========================== */}

        {activeTab === "settings" && (

          <>

            <h2>
              Settings
            </h2>


            <div className="settings-box">


              <label>

                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={(e) =>
                    setEmailNotifications(
                      e.target.checked
                    )
                  }
                />

                Enable Email Notifications

              </label>


              <label>

                <input
                  type="checkbox"
                  checked={courseReminders}
                  onChange={(e) =>
                    setCourseReminders(
                      e.target.checked
                    )
                  }
                />

                Enable Course Reminders

              </label>


            </div>

          </>

        )}

      </div>

    </section>

  );
}