import Feedback from "@/components/Feedback";
import T from "@/components/Text";
import { useRouter } from "next/router";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <Feedback
        top={
          <T
            color="black"
            css={{
              fontSize: "3rem",
              mb: "3rem",
              fontWeight: "100",
            }}
          >
            Página não encontrada
          </T>
        }
        image="Page not found"
        alt="Page not found"
        withContainer
        button={{
          text: "Voltar ao início",
          color: "secondary",
          onClick: () => {
            router.push("/");
          },
          css: {
            px: "2rem",
            height: "3rem",
            fontSize: "1.2rem",
          },
        }}
      />
    </>
  );
}
