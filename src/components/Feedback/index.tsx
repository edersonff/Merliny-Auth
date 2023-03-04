import { Button, Image } from "@nextui-org/react";
import React from "react";
import { feedback } from "./data";
import { Container } from "./styles";

export default function Feedback({
  src,
  alt,
  withContainer = false,
  button,
  top,
  ...props
}: {
  src: keyof typeof feedback;
  alt: string;
  withContainer?: boolean;
  top?: React.ReactNode;
  button?: {
    text: string & Element<any, any>;
    onClick: () => void;
  } & React.ComponentProps<typeof Button>;
} & React.ComponentProps<typeof Image>) {
  const img = feedback[src];
  const ImageContainer = withContainer ? Container : "div";
  if (button) {
    const { onClick, text, ...rest } = button;
    return (
      <ImageContainer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          flexDirection: "column",
          userSelect: "none",
        }}
      >
        {top}
        <Image
          width={300}
          height={300}
          objectFit="scale-down"
          alt={alt}
          {...props}
          src={img}
        />
        <Button
          auto
          onClick={onClick}
          css={{ mt: "1rem", p: "$10 $20" }}
          color="primary"
          {...rest}
        >
          {text}
        </Button>
      </ImageContainer>
    );
  }
  return (
    <ImageContainer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        flexDirection: "column",
        userSelect: "none",
        pointerEvents: "none",
      }}
    >
      {top}
      <Image
        width={300}
        height={300}
        objectFit="scale-down"
        alt={alt}
        {...props}
        src={img}
      />
    </ImageContainer>
  );
}
