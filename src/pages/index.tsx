import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Image, Link, Spacer, Input } from "@nextui-org/react";
import NextLink from "next/link";
import T from "../components/Text";
import ButtonBorder from "../components/Button/border";
import { motion } from "framer-motion";
import { authService } from "@/services/auth";
import { FaUserCircle } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
import { findEmail } from "@/data/forms/findEmail";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
/**
 * :root{
  --nextui-colors-border: #000
}

 */
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
      <Link
        href="/"
        css={{
          d: "flex",
          ai: "center",
          jc: "center",
          mb: "2rem",
        }}
      >
        <Image
          src="/logo.webp"
          width={88}
          alt="logo"
          style={{
            marginRight: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
      </Link>
      <Card
        css={{
          mw: "500px",
          d: "flex",
          jc: "center",
          alignItems: "center",
          p: 30,
          pb: 40,
          pt: steap === 0 ? 0 : 40,
          bg: "white",
          transition: "all 0.5s ease",
          br: 30,
        }}
        variant={steap === 0 ? "flat" : "shadow"}
      >
        <Card.Body>
          {steap === 0 && <FindEmail setSteap={setSteap} />}
          {steap === 1 && <EndLogin setSteap={setSteap} />}
        </Card.Body>
      </Card>
      {steap === 1 && (
        <>
          <Spacer y={2} />
          <Link
            href="#"
            css={{
              d: "flex",
              w: "100%",
              ta: "center",
              fs: "1.2rem",
            }}
            onPress={() => setSteap(0)}
          >
            Voltar
          </Link>
        </>
      )}
    </Col>
  );
}

function FindEmail({ setSteap }: { setSteap: (steap: number) => void }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const checkEmail = (data: { email: string }) => {
    setLoading(true);
    authService
      .checkEmail({
        email: data?.email,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("email", data.email);
          setSteap(1);
        }
      })
      .catch((error: any) => {
        setError(error?.response?.data?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{
    email: string;
  }>({
    mode: "onChange",
    revalidateMode: "onChange",
    resolver: yupResolver(findEmail),
    defaultValues: {
      email: "",
    },
    onsubmit: checkEmail,
  } as any);

  useEffect(() => {
    setError(errors.email?.message ?? "");
  }, [errors]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        style={{
          width: "100%",
        }}
      >
        <T
          h3
          color="black"
          style={{
            width: "100%",
            fontWeight: 700,
            marginBottom: "0.2rem",
          }}
        >
          Digite seu email
        </T>
      </motion.div>
      <Spacer y={1} />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{
          width: "100%",
        }}
      >
        <Input
          type={"email"}
          color="primary"
          autoComplete="email"
          placeholder="E-mail"
          autoFocus
          status={error ? "error" : "primary"}
          css={{
            width: "100%",
          }}
          style={{
            fontSize: "1.2em",
          }}
          bordered
          {...register("email")}
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
      </motion.div>
      <Spacer y={2.5} />
      <ButtonBorder
        loading={loading}
        css={{
          w: "100%",
          p: "2.1rem",
        }}
        size="xl"
        onPress={handleSubmit(checkEmail) as any}
      >
        <T
          style={{
            margin: 0,
            fontSize: "1.15em",
          }}
          h5
        >
          Continuar
        </T>
      </ButtonBorder>
      <Spacer y={1.25} />
      <T
        p2
        color="gray"
        style={{
          width: "100%",
        }}
      >
        Você não tem uma conta?{" "}
        <NextLink href="/signup">
          <Link>Faça seu cadastro</Link>
        </NextLink>
      </T>
    </>
  );
}

function EndLogin({ setSteap }: { setSteap: (steap: number) => void }) {
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
      setError(error?.response?.data?.message);
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
        <motion.div
          initial={{ opacity: 0, y: 7 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          style={{
            width: "100%",
          }}
        >
          <Card
            css={{ w: "100%", p: "0.2rem 0.5rem", br: 5 }}
            variant="bordered"
          >
            <Card.Body
              css={{
                fd: "row",
                ai: "center",
              }}
            >
              <FaUserCircle size={26} />
              <T
                style={{
                  margin: 0,
                  marginLeft: "0.5rem",
                  fontSize: "1.3rem",
                }}
                p1
              >
                {email}
              </T>
            </Card.Body>
          </Card>
        </motion.div>
        <Spacer y={2} />

        <motion.div
          initial={{ opacity: 0, y: 7 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          style={{
            width: "100%",
          }}
        >
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
        </motion.div>
      </Col>
      <Spacer y={2} />
      <ButtonBorder
        loading={loading}
        css={{
          w: "100%",
          p: "2.1rem",
        }}
        size="xl"
        onPress={login}
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
    </>
  );
}
