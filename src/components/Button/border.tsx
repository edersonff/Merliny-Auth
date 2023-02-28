import { theme } from "@/theme";
import { Button as ButtonComponent, styled } from "@nextui-org/react";
import { Loading } from "@nextui-org/react";

const MyButton = styled(ButtonComponent, {
  borderRadius: "999px",
  fontSize: "15px",
  height: "38px",
  width: "100%",
  border: "0",
});

export default function ButtonBorder(
  props: React.ComponentProps<typeof ButtonComponent> & {
    minWidth?: boolean;
    loading?: boolean;
  }
) {
  const { minWidth = "100px", css, loading, children, ...rest } = props;
  return (
    <MyButton
      {...rest}
      css={{
        minWidth: minWidth ? "unset" : "var(--nextui-space-48)",
        backgroundColor: loading ? "$gray-300" : "var(--nextui-color-primary)",
        ...css,
      }}
    >
      {loading ? <Loading size="xs" /> : children}
    </MyButton>
  );
}
