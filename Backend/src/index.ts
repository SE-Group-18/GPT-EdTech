import express from "express";
const app = express();
const port = process.env.PORT || 5001;
const connectDB = require("./DB/Connect");
require("dotenv").config();
const cors = require("cors");

// Importing Routes
const studentRouter = require("./routes/studentRoute");
const enrollmentRouter = require("./routes/enrollmentRoute");
const adminRouter = require("./routes/adminRoute");
const courseRouter = require("./routes/courseRoute");
const lessonRouter = require("./routes/lessonRoute");
const ratingRouter = require("./routes/ratingRoute");
const commentRouter = require("./routes/commentRoute");
const questionRouter = require("./routes/questionRoute");

app.use(cors());

app.use(express.json());

// For Student Routes
app.use("/api/student", studentRouter);

// Use the enrollment route
app.use("/api/enrollment", enrollmentRouter);

app.use("/api/admin", adminRouter);

app.use("/api/course", courseRouter);

app.use("/api/course/lessons", lessonRouter);

app.use("/api/course/ratings", ratingRouter);

app.use("/api/course/comments", commentRouter);

app.use("/api/course/quiz", questionRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
