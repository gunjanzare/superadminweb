import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import { ColorContext } from "./extras/ColorContext";
import UpMenu from "./components/UpMenu";
import Home from "./pages/HomePage";
import SimpleIntro from "./components/SimpleIntro";
import FaqList from "./components/FaqList";
import HomePagee from "./pages/HomePagee";

function App() {
  const [color, setColor] = useState<string>("");
  const [point, setPoint] = useState<number>(0);
  const handleColorChange = (color: string) => {
    setColor(color);
  };
  const handlePointChange = (p: number) => {
    setPoint(p);
  };

  return (
    <div className="overflow-hidden">
      <HomePagee />
    </div>
  );
}

export default App;
