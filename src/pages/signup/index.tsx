import React, { useEffect, useState } from "react";

import {
  Card,
  Col,
  Image,
  Row,
  Text,
  Link,
  Spacer,
  Input,
  Grid,
  Switch,
  globalCss,
  Modal,
} from "@nextui-org/react";
import T from "../../components/Text";
import ButtonBorder from "../../components/Button/border";
import { FaLock } from "react-icons/fa";
import Feedback from "@/components/Feedback";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { signupData } from "../../data/signupData";
import { feedback } from "@/components/Feedback/data";
import { SignupContainer } from "@/styles/singup";
import { yupResolver } from "@hookform/resolvers/yup";
import { singupSchema } from "../../data/forms/singup";
import { MdEmail } from "react-icons/md";
import NextLink from "next/link";
import { authService, RegisterBody } from "@/services/auth";
import Lottie from "lottie-react";
import sucessAnimation from "../../assets/animations/success.json";
import visualData from "../../assets/animations/Visual data.json";

const globalStyles = globalCss({
  ".nextui-input-main-container": { w: "100%!important" },
});
export default function Signup() {
  const [modal, setModal] = useState(false);
  const [success, setSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { from } = router.query;

  const { src, back, subtitle, title } =
    signupData[
      (from !== undefined ? String(from) : "merliny") as keyof typeof signupData
    ];

  globalStyles();

  const handleSignup = (data: RegisterBody) => {
    setLoading(true);
    authService
      .register(data)
      .then((res) => {
        if (res.status === 201) {
          setSucess(true);
          setTimeout(() => {
            router.push("/signup/congratulations");
          }, 3000);
        }
      })
      .catch((err) => {
        const { data } = err.response;
        const { field, message, status } = data;
        if (status === 400) {
          setError(field, {
            type: "manual",
            message,
          });
        } else {
          setModal(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onChangeSwitch = (e: any) => {
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
  };

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    getValues,
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
    onsubmit: handleSignup,
  } as any);

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
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="error-modal"
          css={{
            p: "30px",
          }}
        >
          <Modal.Header>
            <T h2 center color="#000">
              OPS!
            </T>
          </Modal.Header>
          <Modal.Body>
            <T p2 center color="darkGray">
              Ocorreu um erro ao tentar se conectar com o servidor
            </T>
            <Feedback src="Bad gateway" alt="Bad gateway" />
          </Modal.Body>
        </Modal>
        <Modal
          open={success}
          preventClose
          onClose={() => setSucess(false)}
          aria-labelledby="sucess-modal"
          css={{
            p: "30px",
            backgroundColor: "transparent",
          }}
        >
          <Modal.Body>
            <Lottie animationData={sucessAnimation} loop={false} />
          </Modal.Body>
        </Modal>
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
                        helperText={errors.lastname && errors.lastname.message}
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
                    onChange={onChangeSwitch}
                  />
                  <T
                    labelProps={{
                      htmlFor: "switch",
                    }}
                    p2
                    color="primary"
                  >
                    Eu aceito os{" "}
                    <NextLink href="/terms/terms_and_conditions">
                      <Link>Termos de uso</Link>
                    </NextLink>{" "}
                    e a{" "}
                    <NextLink href="/terms/privacy">
                      <Link>Política de privacidade</Link>
                    </NextLink>
                    da Merliny
                  </T>
                </Row>

                <Spacer y={1.5} />
                <ButtonBorder
                  disabled={
                    Object.keys(errors).length > 0 ||
                    !getValues("terms_accepted")
                  }
                  loading={loading}
                  onPress={handleSubmit(handleSignup as any) as any}
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
                <Lottie animationData={visualData} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        {/* </form> */}
      </Col>
    </SignupContainer>
  );
}
