import React from "react";
import { Input as InputComponent } from "@nextui-org/react";

export default function ButtonBorder(
  props: React.ComponentProps<typeof InputComponent>
) {
  const { ...rest } = props;
  return (
    <InputComponent
      bordered
      size="xl"
      css={{
        w: "100%",
      }}
      {...rest}
    />
  );
}
