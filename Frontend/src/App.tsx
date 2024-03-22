import UserDashboard from "./components/UserDashboard/UserDashboard";
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

function App() {
  return (
    <>
      <NavbarComp></NavbarComp>
      <Routes>
        <Route path="/Landing" element={<LandingPage/>} />
        <Route path="/" element={<ExploreCourses />} />
        <Route path="/ctr_test" element={<Counter />} />
        <Route path="/unpersisted_ctr_test" element={<Unpersisted_Counter />} />
        <Route path="/explore-courses" element={<ExploreCourses />} />
        <Route path="/dash" element={<UserDashboard />} />
        <Route path="/search" element={<SearchCourse />} />
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/course-overview" element={<CourseOverviewPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/course-overview" element={<CourseOverviewPage />} />
        <Route path="/course-content" element={<CourseContentPage />} />
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
