"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});
const Post = (0, mongoose_1.model)("User", postSchema);
exports.default = Post;
