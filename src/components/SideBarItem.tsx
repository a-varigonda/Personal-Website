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
          bg={active ? "bg.emphasized" : "transparent"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", bg: "bg.emphasized" }}
          w="90%"
        >
          {text}
        </Link>
      </Flex>
    </>
  );
}

export default SideBarItem;
