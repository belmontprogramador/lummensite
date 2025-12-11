"use client";

import { useEffect, useState } from "react";

export function useColorScheme() {
  const [scheme, setScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    setScheme(mq.matches ? "dark" : "light");

    function handleChange(ev: MediaQueryListEvent) {
      setScheme(ev.matches ? "dark" : "light");
    }

    mq.addEventListener("change", handleChange);

    return () => mq.removeEventListener("change", handleChange);
  }, []);

  return scheme;
}
