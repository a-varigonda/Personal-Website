import { IconButton } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";
import { useColorModeValue } from "../ui/color-mode";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const bg = useColorModeValue("purple.500", "purple.600");
  const hoverBg = useColorModeValue("purple.600", "purple.400");
  const glow = useColorModeValue("md", "0 0 15px rgba(157, 78, 221, 0.6)");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <IconButton
      aria-label="Scroll to top"
      onClick={scrollToTop}
      position="fixed"
      bottom="30px"
      right="30px"
      size="lg"
      borderRadius="full"
      bg={bg}
      color="white"
      boxShadow={glow}
      _hover={{ bg: hoverBg, transform: "scale(1.1)" }}
      transition="all 0.3s ease"
      opacity={isVisible ? 1 : 0}
      pointerEvents={isVisible ? "auto" : "none"}
      zIndex={1000}
    >
      <LuArrowUp />
    </IconButton>
  );
};
