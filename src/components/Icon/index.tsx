import { Image } from "@nextui-org/react";
import React from "react";
import { icons } from "./icons";

export default function Icon({
  name,
  height,
  width,
  color,
  ...props
}: {
  name: keyof typeof icons;
  height: number;
  width: number;
  color?: string;
  src?: string;
} & React.ComponentProps<typeof Image>) {
  const src = icons[name];
  const style = {
    filter: `invert(${color})`,
  };
  return (
    <Image
      width={width}
      height={height}
      style={style}
      alt={name + " icon"}
      {...props}
      src={src}
    />
  );
}
