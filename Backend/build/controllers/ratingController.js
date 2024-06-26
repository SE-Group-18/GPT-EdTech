"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.giveRating = exports.getAverageRatingByCourseId = void 0;
const http_status_codes_1 = require("http-status-codes");
const rating_1 = __importDefault(require("../models/rating"));
// Get ratings for a specific course by ID
const getAverageRatingByCourseId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.body;
        const ratings = yield rating_1.default.find({ course_id: id });
        // Calculate the average rating
        const averageRating = ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length;
        // Check if ratings exist, if not, return a default message or value
        if (ratings.length === 0) {
            return res.status(http_status_codes_1.StatusCodes.OK).json({ averageRating: 0 });
        }
        // Return the average rating
        res.status(http_status_codes_1.StatusCodes.OK).json({ averageRating });
    }
    catch (error) {
        res
            .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
            .json({ error: "Server error" });
    }
});
exports.getAverageRatingByCourseId = getAverageRatingByCourseId;
const giveRating = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { course_id, user_id, rating } = req.body;
    try {
        // Find the existing rating or create a new one if none exists
        let updatedRating = yield rating_1.default.findOneAndUpdate({ course_id, user_id }, { rating }, { new: true, upsert: true } // Return the updated document and create it if it doesn't exist
        );
        res.status(200).json({
            message: "Rating updated or created successfully",
        });
    }
    catch (error) {
        console.error("Error updating or creating rating:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.giveRating = giveRating;
module.exports = {
    getAverageRatingByCourseId: exports.getAverageRatingByCourseId,
    giveRating: exports.giveRating,
};
