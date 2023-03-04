"use client";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Link, Text } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { lightTheme, darkTheme } from "@/theme";
import CookieConsent from "react-cookie-consent";
import { whiteColors } from "../data/theme";
import { AppCookieContainer } from "@/styles/App";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { useSSR } from "@nextui-org/react";

React.useLayoutEffect = React.useEffect;

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const t = getCookie("cookieConsent");
    if (t) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, []);
  const { isBrowser } = useSSR();
  if (!isBrowser) return null;
  return (
    <NextThemesProvider
      defaultTheme="light"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
      <AppCookieContainer
        style={{
          display: active ? "flex" : "none",
        }}
      >
        <CookieConsent
          location="bottom"
          buttonText="Aceitar"
          cookieName="cookieConsent"
          style={{
            maxWidth: "50%",
            position: "initial",
            backgroundColor: "transparent",
          }}
          buttonStyle={{
            backgroundColor: whiteColors.purple,
            fontSize: "1.3em",
            fontWeight: "600",
            padding: "10px 20px",
            marginTop: "15px",
            minWidth: "150px",
            borderRadius: "9999px",
            color: "#fff",
          }}
          onAccept={() => {
            setActive(false);
          }}
          expires={150}
        >
          <Text color="#fff">
            Nós usamos nossos próprios cookies em nossos sites para habilitar
            funções básicas como navegação de páginas e acesso a áreas seguras
            de nosso site. Para mais informações, consulte nossa{" "}
            <Link color="warning">Política de Cookies.</Link>
          </Text>
        </CookieConsent>
      </AppCookieContainer>
    </NextThemesProvider>
  );
}

function getCookie(key: string) {
  return document?.cookie
    ?.split("; ")
    ?.find((row) => row.startsWith(key))
    ?.split("=")[1];
}
