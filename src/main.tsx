import BSPaint from "@/bspaint";
import "@/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root") as HTMLDivElement;

createRoot(root).render(
  <StrictMode>
    <BSPaint />
  </StrictMode>,
);
