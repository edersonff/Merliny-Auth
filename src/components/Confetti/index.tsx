import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import ConfettiComponent from "react-confetti";

export default function Confetti() {
  const { width, height } = useWindowSize();
  return <ConfettiComponent width={width} height={height} />;
}
