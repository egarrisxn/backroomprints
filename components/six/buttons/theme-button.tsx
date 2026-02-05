"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      className="border"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="size-4.5 xl:size-5 dark:hidden" />
      <Moon className="hidden size-4.5 xl:size-5 dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
