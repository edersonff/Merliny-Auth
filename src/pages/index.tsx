import AuthModal from "@/components/AuthModal";
import { Col } from "@nextui-org/react";
import React from "react";

export default function Login() {
  return (
    <Col
      css={{
        d: "flex",
        jc: "center",
        pt: 80,
      }}
    >
      <AuthModal />
    </Col>
  );
}
