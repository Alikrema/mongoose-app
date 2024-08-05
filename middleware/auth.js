const jwt = require("jsonwebtoken");
const userRepo = require("../repos/userRepo");
const UnauthorizedError = require("../Errors/UnauthorizedError");
const jsend = require("jsend");

const auth = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      throw new UnauthorizedError("No token provided");
    }
    const token = req.header("Authorization").replace("Bearer ", "");
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userRepo.getUserByEmail(payload.email);
    if (!user) {
      throw new UnauthorizedError("User not found");
    }
    req.user = user;
    next();
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      return res
        .status(401)
        .json(jsend.error({ message: err.message, code: 401 }));
    }
    next(err);
  }
};

module.exports = auth;
