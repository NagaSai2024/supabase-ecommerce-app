import dotenv from "dotenv";
import express from "express"
import cors from "cors"
import topDealsRoute from "./routes/topDealsRoutes.js"
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req,res) => {
    res.send("Backend working.......");
});

app.listen(4000, () => {
    console.log("Backend running on http://localhost:4000");
});

app.use("/home", topDealsRoute);

app.use("/home", categoryRoutes);