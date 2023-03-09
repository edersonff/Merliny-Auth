import getUserToken from "../utils/getUserToken";

export default (req: any, res: any, next: any) => {
  if (req.method == "OPTIONS") return next();
  try {
    const user = getUserToken(req.headers.authorization.split(" ")[1]);
    if (!user) return res.status(401).json({ message: "Not authorized" });
    req.user = user;
  } catch (e) {
    res.status(401).json({ message: "Not authorized" });
  }
  return next(req, res);
};
