import { useEffect } from "react";
import "./Effects.css";

export default function Effects() {
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = document.createElement("div");

      sparkle.innerHTML = "✦";
      sparkle.style.position = "fixed";
      sparkle.style.left = Math.random() * 100 + "vw";
      sparkle.style.bottom = "-20px";
      sparkle.style.fontSize = Math.random() * 6 + 6 + "px";
      sparkle.style.color = "#d4af37";
      sparkle.style.opacity = "0.6";
      sparkle.style.pointerEvents = "none";
      sparkle.style.animation = "floatUp 8s linear forwards";

      document.body.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 8000);
    };

    const interval = setInterval(createSparkle, 900);

    return () => clearInterval(interval);
  }, []);

  return null;
}
