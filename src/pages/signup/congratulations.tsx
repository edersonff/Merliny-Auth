import Confetti from "@/components/Confetti";
import Feedback from "@/components/Feedback";
import T from "@/components/Text";
import { useRouter } from "next/router";
import React from "react";

export default function Congratulations() {
  const router = useRouter();
  return (
    <>
      <Confetti />
      <Feedback
        width={700}
        height={700}
        withContainer
        src="Welcome"
        alt="Welcome-message"
        button={{
          text: <T h5>Vamos lá!</T>,
          onClick: () => {
            router.push("/");
          },
        }}
      />
    </>
  );
}
