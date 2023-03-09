import conn from "../../db/conn";

type param = {
  key: string;
  type: string;
  required: boolean;
};
type regex = {
  [key: string]: RegExp;
};
export default function validator(body: any[string], params: Array<param>) {
  const paramsValidated = params.filter((param: param) => {
    const { key, type, required } = param;
    if (!required && !body[key] && typeof body[key] == "undefined") {
      return false;
    }
    const types = ["string", "number", "boolean"].map((typeStr: string) => {
      if (typeof body[key] !== typeStr && type == typeStr) {
        return true;
      }
    });
    const regexs: Array<regex> = [
      {
        //eslint-disable-next-line no-useless-escape
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      },
      {
        password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      },
      {
        phone: /^(\+33|0)[1-9](\d{2}){4}$/,
      },
      {
        date: /^\d{4}-\d{2}-\d{2}$/,
      },
      {
        time: /^\d{2}:\d{2}$/,
      },
      {
        datetime: /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}$/,
      },
      {
        url: /^(http(s)?:\/\/)?((w){3}.)?[\w-]+(\.[\w-]+)+[/#?]?.*$/,
      },
    ];
    const regexsTypes = regexs.map((regex: regex) => {
      if (regex[type] && !regex[type].test(body[key])) {
        return true;
      }
      return false;
    });

    if (types.includes(true) || regexsTypes.includes(true)) {
      return true;
    }
    return false;
  });
  if (paramsValidated.length !== 0) {
    const first = paramsValidated[0];
    return {
      error: true,
      column: first.key,
      type: first.type,
    };
  }
}
