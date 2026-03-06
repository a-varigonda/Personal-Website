import { Box, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  tagList: string[];
}

function Tags({ tagList }: Props) {
  const glassBg = useColorModeValue("whiteAlpha.600", "blackAlpha.300");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const iconColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <Flex wrap="wrap" justify="center" gap={4} maxW="600px" mt={10}>
        {tagList.map((item) => (
          <Box
            key={item}
            px={6}
            py={2}
            borderRadius="full"
            bg={glassBg}
            border="1px solid"
            borderColor={borderColor}
            backdropFilter="blur(5px)"
            color={iconColor}
            fontSize="sm"
            fontWeight="medium"
            transition="all 0.3s"
            _hover={{
              bg: borderColor,
              transform: "translateY(-2px)",
              boxShadow: "0 0 15px rgba(78, 78, 221, 0.5)",
              borderColor: "blue.400",
            }}
          >
            {item}
          </Box>
        ))}
      </Flex>
    </>
  );
}

export default Tags;
