import UserDashboard from "./components/UserDashboard/UserDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUpPage from "./components/Authentication/SignUp/SignUpPage";
import LoginPage from "./components/Authentication/Login/LoginPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./test_comp/counter";
import Unpersisted_Counter from "./test_comp/unpersisted_ctr";
import NavbarComp from "./components/Navbar and Footer/Navbar";
import Footer from "./components/Navbar and Footer/Footer";
import SearchCourse from "./components/SearchCourses/SearchCourse";
import ExploreCourses from "./components/ExploreCourses/ExploreCourses";
import CourseOverviewPage from "./components/Course/CourseOverviewPage";
import QuizPage from "./components/Quiz/QuizPage";
import CourseContentPage from "./components/Course/CourseContentPage";
import LeaderBoard from "./components/LeaderBoard/LeaderBoard";
import LandingPage from "./components/LandingPage/LandingPage";
import NewAddCourse from "./components/Admin Courses/AddCourse";
import EditableCourse from "./components/Admin Courses/EditableCourse";
import EditCourse from "./components/Admin Courses/EditCourse";
import AllCourseAnalytics from "./components/Admin Courses/AllCourseAnalytics";
import CourseAnalytics from "./components/Admin Courses/CourseAnalytics";
import Summarizer from "./components/Summarizer/Summarizer";
import MERN from "./components/Summarizer/MERN";
import AboutUs from "./components/About Us/AboutUs";
import "./custom.scss";



function App() {
  return (
    <>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/ctr_test" element={<Counter />} />
        <Route path="/unpersisted_ctr_test" element={<Unpersisted_Counter />} />
        <Route path="/explore-courses" element={<ExploreCourses title="Explore Our Courses"/>} />
        <Route path="/dash-admin" element={<AdminDashboard />} />
        <Route path="/dash-student" element={<UserDashboard />} />
        <Route path="/search" element={<SearchCourse />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/course-overview" element={<CourseOverviewPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/course-overview" element={<CourseOverviewPage />} />
        <Route path="/course-content" element={<CourseContentPage />} />
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
        <Route path="/add-course" element={<NewAddCourse />}></Route>
        <Route path="/editable-course" element={<EditableCourse />}></Route>
        <Route path="/edit-course" element={<EditCourse />}></Route>
        <Route path="/all-course-analytics" element={<AllCourseAnalytics />}></Route>
        <Route path="/course-analytics" element={<CourseAnalytics />}></Route>
        <Route path="/summarizer" element={<Summarizer />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<MERN/>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
