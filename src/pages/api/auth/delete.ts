import type { NextApiRequest, NextApiResponse } from "next";
import auth from "../../../back/middleware/auth";
import User from "../../../back/Model/User";
import Handler from "../../../back/utils/handler/handler";

type Data = {
  message: string;
};
type error = {
  column: string;
  type: string;
};

class Delete extends Handler {
  async post(req: NextApiRequest | any, res: NextApiResponse<Data | error>) {
    const user = (await User.findOne({ where: { id: req.user?.id } })) as any;
    user.destroy();
    return res.status(200).json({ message: "Conta deletada com sucesso!" });
  }
}

export default new Delete([auth]).handler;
