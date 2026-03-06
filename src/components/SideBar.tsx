import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import SideBarItem from "./SideBarItem";
import { useColorModeValue } from "./ui/color-mode";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function SideBar({ pages, currentPage, onClick }: Props) {
  const [navE, setNavE] = useState(true);

  const glassBg = useColorModeValue("whiteAlpha.600", "blackAlpha.300");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const iconColor = useColorModeValue("gray.800", "white");

  return (
    <>
      <Flex
        pos="fixed"
        left="0"
        top="0"
        h="100vh"
        w={navE ? "350px" : "0px"}
        transition="all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
        flexDir="column"
        zIndex={10}
        bg={glassBg}
        backdropFilter="blur(12px)"
        borderRight="1px solid"
        borderColor={borderColor}
        overflow="hidden"
      >
        {navE && (
          <>
            <Box mt={20} w={navE ? "350px" : "0px"}></Box>
            <Flex flexDir="column">
              {pages.map((item) => (
                <SideBarItem
                  key={item}
                  text={item}
                  active={item == currentPage}
                  onClick={onClick}
                />
              ))}
            </Flex>
          </>
        )}
      </Flex>

      <Flex pos="fixed" left="0" top="0" zIndex={20}>
        <IconButton
          m={3}
          onClick={() => setNavE(!navE)}
          color={iconColor}
          bg={glassBg}
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor={borderColor}
          _hover={{
            bg: useColorModeValue("blackAlpha.100", "whiteAlpha.200"),
            transform: "scale(1.05)",
          }}
          _active={{
            bg: useColorModeValue("blackAlpha.200", "whiteAlpha.300"),
          }}
        >
          <HiMenu />
        </IconButton>
      </Flex>
    </>
  );
}

export default SideBar;
