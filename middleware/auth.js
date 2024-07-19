const jwt = require("jsonwebtoken");
const userRepo = require("../repos/userRepo");
const UnauthorizedError = require("../Errors/UnauthorizedError");
const jsend = require("jsend");

const auth = async (req, res, next) => {
  if (!req.header("Authorization")) {
    return res
      .status(401)
      .json(jsend.fail({ message: "Unauthorized", code: 401 }));
  }
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userRepo.getUserByEmail(decoded.email);
    if (!user) {
      throw new UnauthorizedError("Invalid email");
    }
    req.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json(jsend.fail({ message: "JWT Malformed", code: 401 }));
    }
    next(err);
  }
};

module.exports = auth;
