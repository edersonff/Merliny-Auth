import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loading } from "@nextui-org/react";
import { ContainerLoading } from "./styles";

export default function LoadingScreen() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 5000);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return loading ? (
    <ContainerLoading>
      <Loading size="xl" />
    </ContainerLoading>
  ) : null;
}
