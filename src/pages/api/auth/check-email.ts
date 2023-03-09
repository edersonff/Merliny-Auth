import { CheckEmailResponse } from "@/services/auth";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../back/Model/User";
import Handler from "../../../back/utils/handler/handler";

class CheckEmail extends Handler {
  async post(req: NextApiRequest, res: NextApiResponse<CheckEmailResponse>) {
    try {
      console.log(req.body.email);
      const user = await User.findOne({
        where: { email: req.body.email },
      });
      if (!user) {
        return res.status(400).json({ message: "Não encontrado", status: 404 });
      }
      return res.status(200).json({ message: "Email válido", status: 200 });
    } catch (err) {
      return res.status(400).json({ message: "Não encontrado", status: 404 });
    }
  }
}

export default new CheckEmail().handler;
