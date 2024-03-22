import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import CourseCard from "../CourseCard/CourseCard";
import { NavigateFunction, useNavigate } from "react-router";
import Styles from "./ExploreCourses.module.css";
import ChatBot from "../ChatBot/ChatBot";
import { useAppSelector } from "../../redux/hooks";
import { getAllCoursesAPI } from "../../constant";

interface Course {
  _id: string;
  title: string;
  description: string;
  image_url: string;
}

function ExploreCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const navigate: NavigateFunction = useNavigate();
  const { isAdmin, email, _id } = useAppSelector((state) => state.User);

  const [chatbotActive, setChatbotActive] = useState(false);
  const toggleChatbot = () => {
    setChatbotActive((prevChatbotActive) => !prevChatbotActive);
  };

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.post(getAllCoursesAPI);
        setCourses(response?.data);
        console.log(response?.data);
      } catch (error) {
        console.error("Error fetching courses", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <Container className="text-center mt-5" style={{ minHeight: "50vh" }}>
      {courses.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center pt-5">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
        <>
          <h2>Explore Our Courses</h2>
          <Row xs={1} md={2} lg={3} className="my-5">
            {courses.map((course: Course) => (
              <Col
                key={course._id}
                className={`my-4 ${Styles.coursecardcontainer} d-flex justify-content-center`}
              >
                <div
                  onClick={() => navigate(`/course-overview?id=${course?._id}`)}
                  style={{ width: "90%" }}
                >
                  <CourseCard
                    key={course._id}
                    title={course.title}
                    description={course.description}
                    imageUrl={course.image_url}
                  />
                </div>
              </Col>
            ))}
          </Row>
          {_id !== null ? (
            <ChatBot
              toggleChatbot={toggleChatbot}
              chatbotActive={chatbotActive}
            />
          ) : null}
        </>
      )}
    </Container>
  );
}

export default ExploreCourses;
