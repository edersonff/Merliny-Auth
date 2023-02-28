import { colors, typography } from "@/pages/theme";
import React from "react";
import { Text, Link } from "@nextui-org/react";
export default function T(
  props: React.ComponentProps<typeof Text> & {
    children: React.ReactNode;
    h1?: boolean;
    h2?: boolean;
    h3?: boolean;
    h4?: boolean;
    h5?: boolean;
    h6?: boolean;
    p1?: boolean;
    p2?: boolean;
    s1?: boolean;
    s2?: boolean;
    color?: keyof typeof colors;
    center?: boolean;
    right?: boolean;
    href?: string;
  }
) {
  const {
    children,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p1,
    p2,
    s1,
    s2,
    style,
    href,
    ...rest
  } = props;
  const className = h1
    ? "h1"
    : h2
    ? "h2"
    : h3
    ? "h3"
    : h4
    ? "h4"
    : h5
    ? "h5"
    : h6
    ? "h6"
    : p1
    ? "p1"
    : p2
    ? "p2"
    : s1
    ? "s1"
    : s2
    ? "s2"
    : "";

  const El = h1
    ? "h1"
    : h2
    ? "h2"
    : h3
    ? "h3"
    : h4
    ? "h4"
    : h5
    ? "h5"
    : h6
    ? "h6"
    : p1
    ? "p1"
    : p2
    ? "p2"
    : s1
    ? "s1"
    : s2
    ? "s2"
    : "";

  if (href) {
    return (
      <Link href={href}>
        <El
          style={{
            color: props.color ? colors[props.color] : undefined,
            textAlign: props.center
              ? "center"
              : props.right
              ? "right"
              : undefined,
            letterSpacing: 1,
            ...typography[className as keyof typeof typography],
            ...style,
          }}
          {...rest}
        >
          {children}
        </El>
      </Link>
    );
  }

  return (
    <El
      style={{
        color: props.color ? colors[props.color] : undefined,
        textAlign: props.center ? "center" : props.right ? "right" : undefined,
        letterSpacing: 1,
        ...typography[className as keyof typeof typography],
        ...style,
      }}
      {...rest}
    >
      {children}
    </El>
  );
}
