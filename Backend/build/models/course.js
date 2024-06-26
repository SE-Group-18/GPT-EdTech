"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const courseSchema = new mongoose_1.Schema({
    title: { type: String, required: [true, 'Title is required'] },
    description: { type: String, required: [true, 'Description is required'] },
    image_url: { type: String, required: [true, 'Image URL is required'] },
    admin_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Admin', required: [true, 'Admin ID is required'] }
});
// Title getter and setter
courseSchema.methods.getTitle = function () {
    return this.title;
};
courseSchema.methods.setTitle = function (title) {
    this.title = title;
};
// Description getter and setter
courseSchema.methods.getDescription = function () {
    return this.description;
};
courseSchema.methods.setDescription = function (description) {
    this.description = description;
};
// Image URL getter and setter
courseSchema.methods.getImageUrl = function () {
    return this.image_url;
};
courseSchema.methods.setImageUrl = function (url) {
    this.image_url = url;
};
exports.default = mongoose_1.default.model('Course', courseSchema);
