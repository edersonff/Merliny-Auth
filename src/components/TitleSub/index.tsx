import { Col } from "@nextui-org/react";
import React from "react";
import T from "../Text";

export default function TitleSub(
  props: {
    title: string;
    sub: string;
  } & React.ComponentProps<typeof Col>
) {
  const { title, sub } = props;
  return (
    <Col {...props}>
      <T h1 color="black">
        {title}
      </T>
      <T p2 color="gray">
        {sub}
      </T>
    </Col>
  );
}
