import { theme } from "@/theme";
import { Input as InputComponent, styled } from "@nextui-org/react";

export default function ButtonBorder(
  props: React.ComponentProps<typeof InputComponent> & {
    minWidth?: boolean;
  }
) {
  const { minWidth = "100px", css, ...rest } = props;
  return (
    <InputComponent
      bordered
      size="xl"
      {...rest}
      css={{
        minWidth: minWidth ? "unset" : "var(--nextui-space-48)",
        w: "100%",
        ...css,
      }}
    />
  );
}
