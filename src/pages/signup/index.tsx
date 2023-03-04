import React, { useEffect, useRef, useState } from "react";

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
  Progress,
  Grid,
  Switch,
  globalCss,
} from "@nextui-org/react";
import T from "../../components/Text";
import ButtonBorder from "../../components/Button/border";
import { FaLock, FaUserCircle } from "react-icons/fa";
import Feedback from "@/components/Feedback";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { signupData } from "../../data/data";
import { feedback } from "@/components/Feedback/data";
import { SignupContainer } from "@/styles/singup";
import { yupResolver } from "@hookform/resolvers/yup";
import { singupSchema } from "../../data/forms/singup";
import { MdEmail } from "react-icons/md";

const globalStyles = globalCss({
  ".nextui-input-main-container": { w: "100%!important" },
});

export default function Signup() {
  const router = useRouter();
  const { from } = router.query;

  const { src, back, subtitle, title } =
    signupData[
      (from !== undefined ? String(from) : "merliny") as keyof typeof signupData
    ];

  globalStyles();
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<{
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    terms_accepted: boolean;
  }>({
    mode: "onChange",
    revalidateMode: "onChange",
    resolver: yupResolver(singupSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      terms_accepted: false,
    },
  } as any);
  useEffect(() => {
    console.log(errors, isValid);
  }, [errors, isValid]);
  const handleSignup = handleSubmit((data) => {
    console.log(data);
    // do api stuff here
  });

  return (
    <SignupContainer>
      <Col
        css={{
          d: "flex",
          jc: "center",
          ai: "center",
          fd: "column",
          h: "100vh",
        }}
      >
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Card
            css={{
              mw: "1200px",
              d: "flex",
              jc: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              p: "30px",
            }}
            variant="flat"
          >
            <Card.Header css={{ p: 0 }}>
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
                <Text h2 color="primary">
                  {title}
                </Text>
              </Link>
            </Card.Header>
            <Card.Body>
              {/* Fake autofill */}
              <div
                style={{
                  display: "none",
                }}
              ></div>

              <Spacer y={1} />
              <Row
                css={{
                  d: "flex",
                  gap: "7.5%",
                }}
              >
                <Col>
                  <T h2 color="primary">
                    Crie sua conta
                  </T>
                  <Spacer y={0.6} />
                  <T p2 color="primary">
                    {subtitle}
                  </T>
                  <Spacer y={2} />
                  <Grid.Container
                    gap={2}
                    css={{
                      p: 0,
                    }}
                  >
                    <Row className="minColumn">
                      <Grid
                        css={{
                          flex: 1,
                        }}
                      >
                        <Input
                          bordered
                          placeholder="Nome"
                          label="Nome"
                          status={errors.firstname ? "error" : "primary"}
                          helperText={
                            errors.firstname && errors.firstname.message
                          }
                          helperColor="error"
                          type="text"
                          autoComplete="given-name"
                          borderWeight="light"
                          className={errors.firstname && "shake"}
                          style={{
                            fontSize: "1.2rem",
                            borderColor: "red",
                          }}
                          {...register("firstname", { required: true })}
                        />
                      </Grid>
                      <Grid
                        css={{
                          flex: 1,
                        }}
                      >
                        <Input
                          bordered
                          placeholder="Sobrenome"
                          label="Sobrenome"
                          status={errors.lastname ? "error" : "primary"}
                          helperText={
                            errors.lastname && errors.lastname.message
                          }
                          helperColor="error"
                          type="text"
                          autoComplete="family-name"
                          borderWeight="light"
                          className={errors.lastname && "shake"}
                          style={{
                            fontSize: "1.2rem",
                          }}
                          {...register("lastname", { required: true })}
                        />
                      </Grid>
                    </Row>
                    <Grid
                      css={{
                        w: "100%",
                      }}
                    >
                      <Input
                        bordered
                        placeholder="Email"
                        contentLeft={<MdEmail />}
                        label="Email"
                        status={errors.email ? "error" : "primary"}
                        helperText={errors.email && errors.email.message}
                        helperColor="error"
                        type="email"
                        autoComplete="email"
                        borderWeight="light"
                        className={errors.email && "shake"}
                        style={{
                          fontSize: "1.2rem",
                        }}
                        {...register("email", { required: true })}
                      />
                    </Grid>
                    <Grid
                      css={{
                        w: "100%",
                      }}
                    >
                      <input
                        style={{ opacity: 0, position: "absolute" }}
                        autoComplete="email"
                      />
                      <Input
                        bordered
                        placeholder="Senha"
                        contentLeft={<FaLock />}
                        label="Senha"
                        status={errors.password ? "error" : "primary"}
                        helperText={errors.password && errors.password.message}
                        helperColor="error"
                        type="password"
                        autoComplete="new-password"
                        borderWeight="light"
                        className={errors.password && "shake"}
                        style={{
                          fontSize: "1.2rem",
                        }}
                        {...register("password", { required: true })}
                      />
                    </Grid>
                  </Grid.Container>
                  <Spacer y={1.5} />
                  <Row
                    css={{
                      ai: "center",
                      gap: 20,
                    }}
                  >
                    <Switch
                      color={"primary"}
                      id="switch"
                      onChange={(e) => {
                        const value = e.target.checked;
                        setValue("terms_accepted", value);
                        if (value) {
                          clearErrors("terms_accepted");
                        } else {
                          setError("terms_accepted", {
                            type: "manual",
                            message: "Você precisa aceitar os termos",
                          });
                        }
                        console.log(errors);
                      }}
                    />
                    <T
                      labelProps={{
                        htmlFor: "switch",
                      }}
                      p2
                      color="primary"
                    >
                      Eu aceito os{" "}
                      <Link href="/terms/terms_and_conditions">
                        Termos de uso
                      </Link>{" "}
                      e a{" "}
                      <Link href="/terms/privacy">Política de privacidade</Link>
                    </T>
                  </Row>

                  <Spacer y={1.5} />
                  <ButtonBorder
                    disabled={Object.keys(errors).length > 0}
                    type="submit"
                    css={{
                      w: "100%",
                    }}
                    style={{
                      padding: "2rem",
                    }}
                  >
                    <T p1 color="primary">
                      Cadastrar conta
                    </T>
                  </ButtonBorder>
                </Col>
                <Col className="hideMin">
                  <Feedback
                    src={src as keyof typeof feedback}
                    width={500}
                    height={500}
                    alt={title}
                  />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </form>
      </Col>
    </SignupContainer>
  );
}
