import jwt from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").replace(/bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded.id;

      next();
    } catch (error) {
      console.log(error);
      res.json({
        message: "Немає доступу",
      });
    }
  } else {
    res.json({
      message: "Немає доступу",
    });
  }
};
