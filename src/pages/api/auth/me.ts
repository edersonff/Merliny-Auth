import type { NextApiRequest, NextApiResponse } from "next";
import { Model } from "sequelize";
import auth from "../../../back/middleware/auth";
import User from "../../../back/Model/User";
import Handler from "../../../back/utils/handler/handler";

type Data = Model<any, any> | null;
type error = {
  column: string;
  type: string;
};

class Me extends Handler {
  async post(req: NextApiRequest | any, res: NextApiResponse<Data | error>) {
    const user = await User.findOne({ where: { id: req.user?.id } });
    return res.status(200).json(user);
  }
}

export default new Me([auth]).handler;
