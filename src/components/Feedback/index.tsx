import { Button, Image } from "@nextui-org/react";
import React from "react";
import { feedback } from "./data";
import { Container } from "./styles";

export default function Feedback({
  image,
  alt,
  withContainer = false,
  button,
  top,
  ...props
}: {
  image: keyof typeof feedback;
  alt: string;
  withContainer?: boolean;
  top?: React.ReactNode;
  button?: {
    text: string;
    onClick: () => void;
  } & React.ComponentProps<typeof Button>;
} & React.ComponentProps<typeof Image>) {
  const img = feedback[image];
  const ImageContainer = withContainer ? Container : React.Fragment;
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
          style={{ marginTop: "1rem" }}
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
