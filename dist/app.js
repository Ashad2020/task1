"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gobalErrorHandler_1 = __importDefault(require("./middlewares/gobalErrorHandler"));
const notFound_1 = __importDefault(require("./middlewares/notFound"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// app routes
app.use("/api/v1", routes_1.default);
const test = (req, res) => {
    res.send("up and runing!");
};
app.get("/", test);
app.use(gobalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
