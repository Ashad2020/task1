import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./middlewares/gobalErrorHandler";
import notFound from "./middlewares/notFound";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());

// app routes
app.use("/api/v1", router);

const test = (req: Request, res: Response) => {
  res.send("up and runing!");
};

app.get("/", test);

app.use(globalErrorHandler);

app.use(notFound);
export default app;
