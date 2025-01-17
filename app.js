const express = require("express");
const jsend = require("jsend");
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");
const usersRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const emailRouter = require("./routers/emailRouter");
const smsRouter = require("./routers/smsRouter");
const uploadRouter = require("./routers/uploadRouter");
const UnauthorizedError = require("./Errors/UnauthorizedError");
const EmailAlreadyExistsError = require("./Errors/EmailAlreadyExistsError");
const UnsupportedFileType = require("./Errors/UnsupportedFileType");
const multer = require("multer");

connectDB();

const app = express();
app.use(cors());
app.use(cookieParser());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/users", usersRouter);
app.use("/products", productRouter);
app.use("/email", emailRouter);
app.use("/sms", smsRouter);
app.use("/uploads", uploadRouter);

app.use((req, res, next) => {
  res.status(404).json(jsend.error({ message: "Not found", code: 404 }));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err instanceof UnauthorizedError) {
    return res
      .status(401)
      .json(jsend.error({ message: err.message, code: 401 }));
  }
  if (err instanceof EmailAlreadyExistsError) {
    return res
      .status(400)
      .json(jsend.error({ message: err.message, code: 400 }));
  }
  if (err instanceof UnsupportedFileType) {
    return res.status(400).json(
      jsend.error({
        message: err.message || "Unsupported file type",
        code: 400,
      })
    );
  }
  if (err instanceof multer.MulterError) {
    return res.status(400).json(
      jsend.error({
        message: err.message || "Multer error",
        code: 400,
      })
    );
  }
  res.status(500).send(jsend.error({ message: "Something Broke!", code: 500 }));
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
