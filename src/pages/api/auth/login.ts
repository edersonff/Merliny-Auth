import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../back/Model/User";
import Handler from "../../../back/utils/handler/handler";
import argon2 from "argon2";
import { TokenResponse, User as UserType } from "@/services/auth";

class Login extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse<TokenResponse>) {
    const validator = this.validator(req.body, [
      { key: "email", type: "email", required: true },
      { key: "password", type: "password", required: true },
    ]);
    if (validator) {
      return res.status(400).json({
        message: "Campo inválido",
        status: 400,
      });
    }
    const { email, password } = req.body;
    const user = (await User.findOne({ where: { email } })) as any as UserType;
    if (!user) {
      return res.status(404).json({
        message: "Email não encontrado",
        status: 404,
      });
    }
    const validPassword = await argon2.verify(user.password, password);
    if (!validPassword) {
      return res.status(401).json({
        message: "Senha incorreta",
        status: 401,
      });
    }
    const token = this.generateToken(user);
    return res.status(200).json({ token });
  }
}

export default new Login().handler;
