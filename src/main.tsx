import BSPaint from "@/bspaint";
import { ThemeProvider } from "@/components/theme-provider";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <ThemeProvider
      enableSystem
      defaultTheme="system"
      attribute="class"
      disableTransitionOnChange
    >
      <BSPaint />
    </ThemeProvider>
  </StrictMode>,
);
