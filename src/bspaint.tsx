import Canvas from "./components/canvas";
import Footer from "./components/footer";
import ToolsHeader from "./components/tools-header";

export default function BSPaint() {
  return (
    <div className="w-full h-full">
      <ToolsHeader />
      <Canvas />
      <Footer />
    </div>
  );
}
