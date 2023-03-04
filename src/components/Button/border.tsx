import React from "react";
import { disabled } from "@/data/theme";
import { Button as ButtonComponent, styled } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";

const MyButton = styled(ButtonComponent, {
  borderRadius: "999px",
  fontSize: "15px",
  height: "38px",
  width: "100%",
  border: "0",
  // disabled
  "&:disabled": {
    backgroundColor: disabled,
    cursor: "not-allowed",
  },
});

export default function ButtonBorder(
  props: React.ComponentProps<typeof ButtonComponent> & {
    minWidth?: boolean;
    loading?: boolean;
    css?: React.CSSProperties;
  }
) {
  const { minWidth = "100px", css, loading, children, ...rest } = props;
  return (
    <MyButton
      {...rest}
      css={{
        minWidth: minWidth ? "unset" : "var(--nextui-space-48)",
        backgroundColor: loading ? "$darkPurple" : "$purple",
        ...css,
      }}
    >
      {loading ? <Loading color="white" /> : children}
    </MyButton>
  );
}
