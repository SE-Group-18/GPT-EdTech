export interface admin_type {
  email: string;
  password: string;
}

export interface comment_type {
  course_id: string;
  student_id: string;
  comment_text: string;
}

export interface course_type {
  title: string;
  description: string;
  image_url: string;
  admin_id: string;
  _id:string;
}

export interface enrollment_type {
  user_id: string;
  course_id: string;
  completion_status: boolean;
  points: number;
}

export interface lesson_type {
  lesson_num: number;
  title: string;
  _id: string;
  content: string;
  course_id: string;
}

export interface question_type {
  question_text: string;
  correct_answer: number;
  options: string[];
  course_id: string;
  concept: string;
  _id: string;
}

export interface rating_type {
  course_id: string;
  user_id: string;
  rating: number;
}

export interface student_type {
  username: string;
  email: string;
  password: string;
  name: string;
  age: number;
  gender: string;
  profile_picture: string;
}

export interface SignUpData {
  email: string;
  password: string;
  fullName?: string;
  username?: string;
  age?: number;
  gender?: string;
}

export interface Logo {
  url: string;
}

export interface Course {
  _id: string;
  title: string;
  description: string;
  image_url: string;
}

export interface carddata{
  url: string;
  heading: string;
  text: string;
}

export interface ColumnData {
  logo: string;
  title: string;
  description: string;
}


export interface TestimonialData {
  id: number;
  name: string;
  image: string;
  text: string;
}


export const adminSignupAPI: string = "https://gpt-edtech-production.up.railway.app/api/admin/signup";
export const adminLoginAPI: string = "https://gpt-edtech-production.up.railway.app/api/admin/login";


export const studentSignupAPI: string = "https://gpt-edtech-production.up.railway.app/api/student/signup";
export const studentLoginAPI: string = "https://gpt-edtech-production.up.railway.app/api/student/login";





export const getAllCoursesAPI: string = "https://gpt-edtech-production.up.railway.app/api/course";
export const getEditableCoursesAPI: string = "https://gpt-edtech-production.up.railway.app/api/course/editable";
export const getCourseAllInfoAPI: string = "https://gpt-edtech-production.up.railway.app/api/course/get-all-info";
export const getCourseAnalyticsAPI: string = "https://gpt-edtech-production.up.railway.app/api/course/get-course-analytics";
export const updateCourseDetailsAPI: string = "https://gpt-edtech-production.up.railway.app/api/course/update-details";
export const updateLessonAPI: string = "https://gpt-edtech-production.up.railway.app/api/course/lessons/update";
export const updateQuestionAPI: string = "https://gpt-edtech-production.up.railway.app/api/course/quiz/update";
export const updateCourseImageAPI: string = "https://gpt-edtech-production.up.railway.app/api/course/image-update";

export const getTotalPointsAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/enrollment/get-total-points";
export const GoldMedalImgUrl: string =
  "http://res.cloudinary.com/do2hqf8du/image/upload/v1709652796/vuyzjib3oka1lpbh2ne5.svg";
export const SilverMedalImgUrl: string =
  "http://res.cloudinary.com/do2hqf8du/image/upload/v1709652859/ynmptmehr25iptbkqzbo.svg";
export const BronzeMedalImgUrl: string =
  "http://res.cloudinary.com/do2hqf8du/image/upload/v1709652918/eo1gkjmn5ymoyerfmkov.svg";
export const GiveRatingAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/course/ratings/give-rating";
export const SetPointsAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/enrollment/set-points";
export const getEnrollmentAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/enrollment/get-enrollment";
export const getQuizbyCourseIdAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/course/quiz/get-by-id";

export const SearchCourseAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/course/search";

export const FetchStudentDataAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/student/?id=";

export const UpdateStudentAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/student/update";

export const CloudinaryUploadAPI: string =
  "https://api.cloudinary.com/v1_1/do2hqf8du/image/upload";

export const FetchCourseAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/enrollment/courses";

export const GetCourseInfo: string =
  "https://gpt-edtech-production.up.railway.app/api/course/get-info";

export const GetLessonsById: string =
  "https://gpt-edtech-production.up.railway.app/api/course/lessons/get-by-id";

export const AddCommentAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/course/comments/add-comment";

export const GetCommentById: string =
  "https://gpt-edtech-production.up.railway.app/api/course/comments/get-by-id";

export const EnrollStudentAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/enrollment/enroll";

export const GetAvgCourseRatingAPI: string =
  "https://gpt-edtech-production.up.railway.app/api/course/ratings/get-by-id";

export const BaseAPI: string = "https://gpt-edtech-production.up.railway.app/api/";

export const CreateNewCourse: string = "https://gpt-edtech-production.up.railway.app/api/course/create";
