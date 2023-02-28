import { theme } from "@/theme";
import { Button as ButtonComponent, styled } from "@nextui-org/react";

const MyButton = styled(ButtonComponent, {
  borderRadius: "3px",
  fontSize: "15px",
  height: "38px",
  border: "0",

  [`.${theme} &`]: {
    backgroundColor: "$purple",
  },
});

export default function Button(
  props: React.ComponentProps<typeof ButtonComponent> & {
    minWidth?: boolean;
  }
) {
  const { minWidth = "100px", css, ...rest } = props;
  return (
    <MyButton
      {...rest}
      css={{
        minWidth: minWidth ? "unset" : "var(--nextui-space-48)",
        ...css,
      }}
    />
  );
}
