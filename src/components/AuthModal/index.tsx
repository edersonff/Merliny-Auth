import React from "react";

import {
  Card,
  Col,
  Container,
  Image,
  Table,
  Row,
  Tooltip,
  User,
  Text,
  Divider,
  Link,
  Spacer,
  Input,
} from "@nextui-org/react";
import T from "../Text";
import Button from "../Button";
import ButtonBorder from "../Button/border";
import AuthInput from "../Input/Auth";

export default function AuthModal() {
  return (
    <Card
      css={{
        mw: "500px",
        d: "flex",
        jc: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        p: "20px",
      }}
      variant="bordered"
    >
      <Card.Body>
        <Link
          href="/"
          css={{
            d: "flex",
            ai: "center",
          }}
        >
          <Image
            src="/logo.webp"
            width={60}
            height={60}
            alt="logo"
            style={{
              marginRight: "0.5rem",
              marginBottom: "0.5rem",
            }}
          />
          <Text h2 weight={"light"} color="primary">
            Invest
          </Text>
        </Link>
        <Spacer y={2} />
        <T
          h1
          color="black"
          css={{
            w: "100%",
            ta: "left",
            d: "block",
          }}
        >
          Sign in to Coinbase
        </T>
        <T
          p2
          color="darkGray"
          css={{
            w: "100%",
          }}
        >
          Not your device? Use a private or incognito window to sign in.
        </T>
        <Spacer y={3} />
        <AuthInput
          labelPlaceholder="Email"
          name="email"
          type={"email"}
          css={{}}
        />
        <Spacer y={1} />
        <ButtonBorder
          css={{
            w: "100%",
          }}
          size="xl"
        >
          Continue
        </ButtonBorder>
        <Spacer y={1.2} />
        <Link>Sign in to a business account</Link>
        <Spacer y={0.2} />
        <Link>Privacy policy</Link>
      </Card.Body>
    </Card>
  );
}
