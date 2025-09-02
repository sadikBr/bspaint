import { useEffect, useRef, useState } from "react";
import type Tool from "./interfaces/Tool";
import BrushTool from "./tools/BrushTool";

export default function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const toolRef = useRef<Tool | null>(null);

  const [isToolActive, setIsToolActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 160;

    const context = canvas.getContext("2d");
    if (!context) return;

    contextRef.current = context;
    toolRef.current = new BrushTool(context);
  }, []);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mousePosition = { x: e.clientX - rect.left, y: e.clientY - rect.top };

    if (isToolActive && toolRef.current) {
      toolRef.current.execute(mousePosition);
    }
  };

  return (
    <div className="fixed left-0 top-32 w-full h-[calc(100vh-160px)] flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="bg-white select-none"
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsToolActive(true)}
        onMouseUp={() => setIsToolActive(false)}
      ></canvas>
    </div>
  );
}
