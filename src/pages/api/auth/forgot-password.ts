import { ForgotPasswordResponse, User as UserType } from "@/services/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../back/Model/User";
import Handler from "../../../back/utils/handler/handler";
import Mailer from "../../../back/utils/Mailer/Mailer";
import forgotPassword from "../../../templates-ts/forgot-password";

class ForgotPassword extends Handler {
  async post(
    req: NextApiRequest,
    res: NextApiResponse<ForgotPasswordResponse>
  ) {
    const user = (await User.findOne({
      where: { email: req.body.email },
    })) as any as UserType;
    if (!user) {
      return res
        .status(404)
        .json({ message: "Email não encontrado", status: 404 });
    }
    new Mailer().sendMail(user?.email, "Reset password", forgotPassword(user));
    return res
      .status(200)
      .json({ message: "Email enviado com sucesso", status: 200 });
  }
}

export default new ForgotPassword().handler;
