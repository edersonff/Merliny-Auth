import generateToken from "../generateToken";
import Validator from "../Validator/Validator";
import errorHandler from "./errorHandler";
import argon2 from "argon2";
import getUserToken from "../getUserToken";

export default class Handler {
  middlewares: any[];
  constructor(middlewares: any[] = []) {
    this.handler = this.handler.bind(this);
    this.post = this.post.bind(this);
    this.post = this.post.bind(this);
    this.put = this.put.bind(this);
    this.delete = this.delete.bind(this);
    this.middlewares = middlewares;
  }
  handler(req: any, res: any) {
    for (const middleware of this.middlewares) {
      try {
        middleware(req, res, (_req: any, _res: any) => {
          req = _req;
          res = _res;
        });
      } catch (err) {
        return errorHandler(err, res);
      }
      if (res.headersSent) {
        return res;
      }
    }
    switch (req.method) {
      case "GET":
        return this.get(req, res);
      case "POST":
        return this.post(req, res);
      case "PUT":
        return this.put(req, res);
      case "DELETE":
        return this.delete(req, res);
      default:
        res.status(405).json({ message: "Method not allowed" });
    }
  }
  get(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  post(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  put(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  delete(req: any, res: any) {
    return res.status(405).json({ message: "Method not allowed" });
  }
  validator(body: any[string], params: any) {
    return Validator(body, params);
  }
  generateToken(user: any) {
    return generateToken(user);
  }
  getUser(token: string) {
    return getUserToken(token);
  }
}
