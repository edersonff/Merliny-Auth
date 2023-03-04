import { feedback } from "@/components/Feedback/data";

export const signupData = {
  invest: {
    src: "Investments",
    back: "https://invest.merliny.com.br",
    title: "Invest",
    subtitle: "A plataforma de investimentos que te ajuda a investir melhor",
  },
  merliny: {
    src: "Visual data",
    back: "https://merliny.com.br",
    title: "Merliny",
    subtitle: "Descruba produtos e serviços para sua empresa",
  },
} as {
  [key: string]: {
    src: keyof typeof feedback;
    back: string;
    title: string;
    subtitle: string;
  };
};
