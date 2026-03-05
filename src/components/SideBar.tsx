import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import SideBarItem from "./SideBarItem";

function SideBar() {
  const [navE, setNavE] = useState(true);
  return (
    <>
      <Flex
        pos="fixed"
        left="0"
        top="0"
        h="100vh"
        w={navE ? "350px" : "0px"}
        bg="gray.800"
        flexDir="column"
      >
        {navE && (
          <>
            <Box mt={20} w={navE ? "350px" : "0px"}></Box>
            <Flex flexDir="column">
              <SideBarItem text="Dashboard1" active={true} />
              <SideBarItem text="Dashboard2" active={false} />
              <SideBarItem text="Dashboard3" active={false} />
            </Flex>
          </>
        )}
      </Flex>

      <Flex pos="fixed" left="0" top="0">
        <IconButton m={3} onClick={() => setNavE(!navE)}>
          <HiMenu />
        </IconButton>
      </Flex>
    </>
  );
}

export default SideBar;
