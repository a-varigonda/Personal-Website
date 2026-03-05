import { Flex, Link } from "@chakra-ui/react";

interface Props {
  text: string;
  active: boolean;
}

function SideBarItem({ text, active }: Props) {
  return (
    <>
      <Flex m={5} flexDir="column" w="100%" alignItems="flex-start">
        <Link
          bg={active ? "gray.900" : "transparent"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", bg: "gray.900" }}
          w="90%"
        >
          {text}
        </Link>
      </Flex>
    </>
  );
}

export default SideBarItem;
