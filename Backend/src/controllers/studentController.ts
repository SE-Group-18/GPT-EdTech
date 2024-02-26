import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Student from '../models/student';
import  {student_type}  from '../Constant';

// Get one specific student
export const getOneStudent = async (req: Request, res: Response) => {
    try {
      console.log("In get 1 student function");
      const studentId = req.query.id;
      const student = await Student.findById(studentId);
      if (!student) {
        return res.status(StatusCodes.NOT_FOUND).json({ error: "Student not found" });
      }
      res.status(StatusCodes.OK).json(student);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Server error" });
    }
};
  
  // Get all students
  export const getAllStudents = async (req: Request, res: Response) => {
    try {
        console.log("In student getall");
        const students = await Student.find();
        res.status(StatusCodes.OK).json(students);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Server error" });
    }
};

// Student signup
export const signup = async (req: Request, res: Response) => {
    try {
        console.log("In student signup");
        const { username, email, password, name, age, gender, profile_picture } = req.body;
        const existingStudent = await Student.findOne({ email });
        if (existingStudent) {
            return res.status(StatusCodes.CONFLICT).json({ error: "Email already in use" });
        }
        const objStudent : student_type = { username, email, password, name, age, gender, profile_picture };
        const student = await Student.create(objStudent);
        res.status(StatusCodes.CREATED).json(student);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Server error" });
    }
};

// Student login
export const login = async (req: Request, res: Response) => {
    try {
        console.log("In student login");
        const { email, password } = req.body;
        const student = await Student.findOne({ email });
        if (!student || student.password !== password) {
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid credentials" });
        }
        res.status(StatusCodes.OK).json(student);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Server error" });
    }
};

// Update a specific student
export const updateStudent = async (req: Request, res: Response) => {
    const { id, ...updateData } = req.body; // Destructure the ID from the body

    try {
        const updatedStudent = await Student.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedStudent) {
            return res.status(StatusCodes.NOT_FOUND).json({ error: "Student not found" });
        }
        res.status(StatusCodes.OK).json(updatedStudent);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Server error" });
    }
};