import jwt from "jsonwebtoken"

const JWT_SECRET = "1234"

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) res.status(403).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.params);
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

export {verifyToken, verifyTokenAndAuthorization}