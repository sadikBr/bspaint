import type Tool from "../interfaces/Tool";

export default class BrushTool implements Tool {
  name: string = "brush";
  context: CanvasRenderingContext2D;

  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
  }

  execute(mousePosition: { x: number; y: number }): void {
    this.context.beginPath();
    this.context.arc(mousePosition.x, mousePosition.y, 5, 0, Math.PI * 2);
    this.context.fillStyle = "black";
    this.context.fill();
  }
}
