"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidations = void 0;
const zod_1 = require("zod");
const createPostValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().min(2, "Title must be at least 2 characters long"),
        description: zod_1.z
            .string()
            .min(2, "Description must be at least 2 characters long"),
    }),
});
exports.postValidations = {
    createPostValidationSchema,
};
