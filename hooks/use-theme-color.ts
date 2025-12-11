"use client";

import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/useColorScheme";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme(); // "light" | "dark"
  const override = props[theme];

  return override ?? Colors[theme][colorName];
}
