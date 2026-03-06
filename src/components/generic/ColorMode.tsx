import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

const ColorMode = () => {
  const glassBg = useColorModeValue("whiteAlpha.600", "blackAlpha.300");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const iconColor = useColorModeValue("gray.800", "white");

  return (
    <ColorModeButton
      pos="fixed"
      right={5}
      top={5}
      zIndex={20}
      bg={glassBg}
      backdropFilter="blur(10px)"
      border="1px solid"
      borderColor={borderColor}
      color={iconColor}
      _hover={{
        bg: useColorModeValue("blackAlpha.100", "whiteAlpha.200"),
        transform: "scale(1.1)",
      }}
      _active={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.100"),
      }}
      transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
    />
  );
};

export default ColorMode;
