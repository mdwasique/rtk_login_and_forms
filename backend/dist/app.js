import express from "express";
import userRoute from "./routes/user.js";
import { connectDb } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
const port = 4000;
connectDb();
const app = express();
app.use(express.json()); // Parse incoming requests data as JSON
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.use(errorMiddleware);
app.listen(port, () => {
    console.log(`server is working on port ${port}`);
});
