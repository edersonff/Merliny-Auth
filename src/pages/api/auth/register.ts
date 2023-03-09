import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../back/Model/User";
import Handler from "../../../back/utils/handler/handler";
import { hash } from "argon2";
import { TokenResponse } from "@/services/auth";

class Register extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse<TokenResponse>) {
    const validator = this.validator(req.body, [
      { key: "firstname", type: "string", required: true },
      { key: "lastname", type: "string", required: true },
      { key: "email", type: "email", required: true },
      { key: "password", type: "password", required: true },
      { key: "terms_accepted", type: "boolean", required: true },
    ]);
    if (validator) {
      return res.status(400).json({
        message: "Campo inválido",
        status: 400,
        field: validator.column,
      });
    }
    const { firstname, lastname, email, password } = req.body;
    const emailUser = await User.findOne({ where: { email } });
    if (emailUser) {
      return res.status(400).json({
        message: "Email já cadastrado",
        field: "email",
        status: 400,
      });
    }
    const newPassword = await hash(password);
    const user = await User.create({
      firstname,
      lastname,
      email,
      password: newPassword,
    });
    const token = this.generateToken(user);
    return res.status(201).json({ token });
  }
}

export default new Register().handler;
