"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandler = (err, req, res, next) => {
    let status = 500;
    let message = err.message || "something went wrong!";
    return res.status(status).json({
        success: false,
        message,
        error: err,
    });
};
exports.default = globalErrorHandler;
