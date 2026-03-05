import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MouseFollower = () => {
  // Motion values for the raw coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs for smoothness
  const springX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Use clientX/Y to track the viewport
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        // THE ALIGNMENT FIX:
        // We set top/left to 0 and use 'x' and 'y' (translate)
        // Then we use translateX(-50%) to perfectly center the div on the point
        top: 0,
        left: 0,
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",

        width: "120px",
        height: "120px",
        borderRadius: "50%",

        // LESS INTENSE: Lowered opacity (0.3) and softer transitions
        background:
          "radial-gradient(circle, rgba(38, 35, 205, 0.3) 0%, rgba(35, 24, 154, 0.1) 40%, transparent 80%)",

        // SHARPER BUT SUBTLE: Small blur keeps the "dot" look without the "fog"
        filter: "blur(12px)",

        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
};
