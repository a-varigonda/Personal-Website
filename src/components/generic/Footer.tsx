import {
  Flex,
  IconButton,
  Link,
  Separator,
  Text,
  Clipboard,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuCheck, LuMail } from "react-icons/lu";

function Footer() {
  return (
    <Flex as="footer" direction="column" align="center" gap={6} py={12} mt={20}>
      <Separator width="80%" opacity="0.1" />

      <Flex gap={4} align="center">
        <Link
          href="https://www.linkedin.com/in/ankitavarigonda/"
          target="_blank"
        >
          <IconButton
            variant="ghost"
            aria-label="LinkedIn"
            fontSize="2xl"
            color="whiteAlpha.700"
            _hover={{ color: "blue.400", bg: "whiteAlpha.100" }}
          >
            <FaLinkedin />
          </IconButton>
        </Link>

        <Link href="https://instagram.com/av.potato" target="_blank">
          <IconButton
            variant="ghost"
            aria-label="Instagram"
            fontSize="2xl"
            color="whiteAlpha.700"
            _hover={{ color: "pink.400", bg: "whiteAlpha.100" }}
          >
            <FaInstagram />
          </IconButton>
        </Link>

        <Clipboard.Root value="avarigon@andrew.cmu.edu" timeout={2000}>
          <Clipboard.Trigger asChild>
            <Button
              variant="outline"
              size="sm"
              bg="whiteAlpha.50"
              borderColor="whiteAlpha.200"
              _hover={{ borderColor: "purple.400", bg: "whiteAlpha.100" }}
            >
              <Clipboard.Indicator copied={<LuCheck color="green.400" />}>
                <LuMail />
              </Clipboard.Indicator>
              <Text ml={2}>Email</Text>
            </Button>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Flex>

      <Text fontSize="xs" color="whiteAlpha.400" letterSpacing="widest">
        © 2026 ANKITA VARIGONDA • CARNEGIE MELLON UNIVERSITY
      </Text>
    </Flex>
  );
}

export default Footer;
