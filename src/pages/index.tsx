import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Col,
  Image,
  Text,
  Link,
  Spacer,
  Input,
  Progress,
} from "@nextui-org/react";
import NextLink from "next/link";
import T from "../components/Text";
import ButtonBorder from "../components/Button/border";
import AuthInput from "../components/Input/Auth";
import { authService } from "@/services/auth";
import { FaUserCircle } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";

export default function Login() {
  const [steap, setSteap] = useState(0);

  return (
    <Col
      css={{
        d: "flex",
        jc: "center",
        ai: "center",
        fd: "column",
        pt: 80,
      }}
    >
      <Card
        css={{
          mw: "470px",
          d: "flex",
          jc: "center",
          alignItems: "center",
          backgroundColor: "#fff",
          p: "30px",
        }}
        variant="bordered"
      >
        <Card.Header>
          <Col>
            <Progress
              striped
              value={steap}
              max={2}
              size="sm"
              css={{
                h: steap === 0 ? 0 : 8,
                opacity: steap === 0 ? 0 : 1,
                transition: "all 0.3s ease",
              }}
            />

            <Link
              href="/"
              css={{
                d: "flex",
                ai: "center",
                jc: "center",
                w: "100%",
              }}
            >
              <Image
                src="/logo.webp"
                width={55}
                height={55}
                alt="logo"
                style={{
                  marginRight: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              />
              <Text h2 weight={"light"} color="primary">
                Merliny
              </Text>
            </Link>
          </Col>
        </Card.Header>
        <Card.Body>
          {steap === 0 && <FindEmail setSteap={setSteap} />}
          {steap === 1 && <EndLogin setSteap={setSteap} />}
        </Card.Body>
      </Card>
      {steap === 1 && (
        <>
          <Spacer y={2} />
          <Link
            css={{
              d: "flex",
              w: "100%",
              ta: "center",
              fs: "1.2rem",
            }}
            onClick={() => setSteap(0)}
          >
            Voltar
          </Link>
        </>
      )}
    </Col>
  );
}

function FindEmail({ setSteap }: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const checkEmail = async () => {
    try {
      setLoading(true);
      const response = await authService.checkEmail({
        email: emailRef?.current?.value ?? "",
      });
      if (response.status === 200) {
        localStorage.setItem("email", emailRef?.current?.value ?? "");
        setSteap(1);
      }
    } catch (error: any) {
      emailRef.current?.focus();
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <T
        h3
        color="black"
        style={{
          width: "100%",
          fontWeight: 700,
          marginBottom: "0.2rem",
        }}
      >
        Faça login na Merliny
      </T>
      <T
        p2
        color="#242424"
        style={{
          width: "100%",
        }}
      >
        Não é seu dispositivo? Use uma janela privada ou anônima para entrar.
      </T>
      <Spacer y={2.5} />
      <Col>
        <AuthInput
          ref={emailRef}
          labelPlaceholder="Email"
          name="email"
          type={"email"}
          label="Email"
          autoComplete="email"
          autoFocus
          status={error ? "error" : "primary"}
          onChange={() => setError("")}
        />
        {error && (
          <T
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
            p1
            color="var(--nextui-colors-red600)"
          >
            <b
              style={{
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
              }}
            >
              <FiAlertCircle
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Erro
            </b>
            : {error}
          </T>
        )}
      </Col>
      <Spacer y={1} />
      <ButtonBorder
        loading={loading}
        css={{
          w: "100%",
          p: "2.3rem",
        }}
        size="xl"
        onClick={checkEmail}
      >
        <T
          style={{
            margin: 0,
            fontSize: "1.2em",
          }}
          h5
        >
          Continuar
        </T>
      </ButtonBorder>
      <Spacer y={1.2} />
      <Link>Entre em uma conta empresarial</Link>
      <Spacer y={0.5} />
      <NextLink href="/signup">
        <Link>Faça seu cadastro</Link>
      </NextLink>
    </>
  );
}

function EndLogin({ setSteap }: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const password = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setEmail(localStorage.getItem("email") ?? "");
  }, []);

  const login = async () => {
    try {
      setLoading(true);
      const response = await authService.login({
        email: email,
        password: password?.current?.value ?? "",
      });
      if (response.status === 200) {
        setSteap(2);
      }
    } catch (error: any) {
      password.current?.focus();
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <T
        h3
        color="black"
        style={{
          width: "100%",
          fontWeight: 700,
          marginBottom: "0.2rem",
        }}
      >
        Coloque sua senha
      </T>
      <Spacer y={1} />
      <Col>
        <Card css={{ w: "100%", p: "0.2rem 0.5rem", br: 5 }} variant="bordered">
          <Card.Body
            css={{
              fd: "row",
              ai: "center",
            }}
          >
            <FaUserCircle size={30} />
            <T
              style={{
                margin: 0,
                marginLeft: "0.5rem",
                fontSize: "1.3rem",
              }}
              p1
            >
              {email}edersonff_@hotmail.com.br
            </T>
          </Card.Body>
        </Card>
        <Spacer y={2} />
        <Input.Password
          ref={password}
          labelPlaceholder="Senha"
          bordered
          name="password"
          type={"password"}
          label="Senha"
          status={error ? "error" : "primary"}
          onChange={() => setError("")}
          size="xl"
          css={{
            w: "100%",
          }}
        />
        {error && (
          <T
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
            p1
            color="var(--nextui-colors-red600)"
          >
            <b
              style={{
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
              }}
            >
              <FiAlertCircle
                style={{
                  marginRight: "0.5rem",
                }}
              />
              Erro
            </b>
            : {error}
          </T>
        )}
      </Col>
      <Spacer y={1} />
      <ButtonBorder
        loading={loading}
        css={{
          w: "100%",
          p: "2.3rem",
        }}
        size="xl"
        onClick={login}
      >
        <T
          style={{
            margin: 0,
            fontSize: "1.2em",
          }}
          h5
        >
          Continuar
        </T>
      </ButtonBorder>
      <Spacer y={1.2} />
      <Link>Entre em uma conta empresarial</Link>
      <Spacer y={0.5} />
      <NextLink href="/signup">
        <Link>Faça seu cadastro</Link>
      </NextLink>
    </>
  );
}
