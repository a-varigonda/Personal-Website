import { Box, Button, Center, Flex, useClipboard } from "@chakra-ui/react";
import ColorMode from "../generic/ColorMode";
import { MouseFollower } from "../generic/Mouse";
import SideBar from "../generic/SideBar";
import { LuCheck, LuCopy } from "react-icons/lu";
import Footer from "../generic/Footer";
import ContactForm from "./ContactForm";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function Contact({ pages, currentPage, onClick }: Props) {
  const { copied, copy } = useClipboard({ value: "avarigon@andrew.cmu.edu" });

  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box flex="1">
          <Center mt={10} fontSize="6xl">
            Contact
          </Center>
          <Center m={5} mt={10} fontSize="xl">
            You can email me at:
          </Center>
          <Center>
            <Button
              variant="outline"
              onClick={copy}
              minW="250px"
              bg="whiteAlpha.50"
              borderColor="whiteAlpha.300"
              _hover={{ bg: "whiteAlpha.200", borderColor: "purple.400" }}
            >
              {copied ? <LuCheck color="green" /> : <LuCopy />}
              {copied ? "Copied to Clipboard!" : "avarigon@andrew.cmu.edu"}
            </Button>
          </Center>
          <Center m={5} fontSize="xl">
            - OR -
          </Center>
          <Center m={5} fontSize="xl">
            Send a message!
          </Center>
          <ContactForm />
        </Box>
        <Footer />
      </Flex>

      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default Contact;
