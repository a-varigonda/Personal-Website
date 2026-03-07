import { Button, Center, useClipboard } from "@chakra-ui/react";
import { LuCheck, LuCopy } from "react-icons/lu";
import ContactForm from "./ContactForm";

function Contact() {
  const { copied, copy } = useClipboard({ value: "avarigon@andrew.cmu.edu" });

  return (
    <>
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
    </>
  );
}

export default Contact;
