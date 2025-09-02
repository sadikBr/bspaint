export default interface Tool {
  name: string;
  context: CanvasRenderingContext2D;

  execute(mousePosition: { x: number; y: number }): void;
}
