"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const post_validation_1 = require("./post.validation");
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const route = express_1.default.Router();
route.get("/", post_controller_1.postControllers.retrievePost);
route.post("/", (0, validateRequest_1.default)(post_validation_1.postValidations.createPostValidationSchema), post_controller_1.postControllers.createPost);
exports.postRoutes = route;
