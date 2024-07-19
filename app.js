const express = require("express");
const jsend = require("jsend");

const connectDB = require("./config/db");
const usersRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);
app.use("/products", productRouter);

app.use((req, res, next) => {
  res.status(404).json(jsend.error({ message: "Not found", code: 404 }));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(jsend.error({ message: "Something Broke!", code: 500 }));
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
