"use client";

export function useColorScheme() {
  if (typeof window === "undefined") return "light"; // SSR-safe

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
