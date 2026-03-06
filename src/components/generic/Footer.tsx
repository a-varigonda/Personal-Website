import {
  Flex,
  IconButton,
  Link,
  Separator,
  Text,
  Clipboard,
  Button,
} from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { LuCheck, LuMail } from "react-icons/lu";
import { useColorModeValue } from "../ui/color-mode";

function Footer() {
  // Define colors that shift based on theme
  const glassBg = useColorModeValue("blackAlpha.50", "whiteAlpha.50");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const textColor = useColorModeValue("gray.600", "whiteAlpha.400");
  const iconBaseColor = useColorModeValue("gray.600", "whiteAlpha.700");

  return (
    <Flex as="footer" direction="column" align="center" gap={6} py={12} mt={20}>
      <Separator width="80%" opacity="0.1" borderColor={borderColor} />

      <Flex gap={4} align="center">
        {/* GitHub */}
        <Link href="https://github.com/a-varigonda" target="_blank">
          <IconButton
            variant="ghost"
            aria-label="GitHub"
            fontSize="2xl"
            color={iconBaseColor} // Dynamic color
            _hover={{
              color: useColorModeValue("black", "white"),
              bg: glassBg,
              transform: "translateY(-2px)",
            }}
            transition="all 0.2s"
          >
            <FaGithub />
          </IconButton>
        </Link>

        {/* LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/ankitavarigonda/"
          target="_blank"
        >
          <IconButton
            variant="ghost"
            aria-label="LinkedIn"
            fontSize="2xl"
            color={iconBaseColor} // Dynamic color
            _hover={{
              color: "blue.400",
              bg: glassBg,
              transform: "translateY(-2px)",
            }}
            transition="all 0.2s"
          >
            <FaLinkedin />
          </IconButton>
        </Link>

        {/* Instagram */}
        <Link href="https://instagram.com/av.potato" target="_blank">
          <IconButton
            variant="ghost"
            aria-label="Instagram"
            fontSize="2xl"
            color={iconBaseColor} // Dynamic color
            _hover={{
              color: "pink.400",
              bg: glassBg,
              transform: "translateY(-2px)",
            }}
            transition="all 0.2s"
          >
            <FaInstagram />
          </IconButton>
        </Link>

        {/* Email Clipboard */}
        <Clipboard.Root value="avarigon@andrew.cmu.edu" timeout={2000}>
          <Clipboard.Trigger asChild>
            <Button
              variant="outline"
              size="sm"
              bg={glassBg} // Dynamic background
              borderColor={borderColor} // Dynamic border
              color={iconBaseColor}
              _hover={{
                borderColor: "purple.400",
                bg: useColorModeValue("blackAlpha.100", "whiteAlpha.100"),
                transform: "translateY(-2px)",
              }}
              transition="all 0.2s"
            >
              <Clipboard.Indicator copied={<LuCheck color="green.400" />}>
                <LuMail />
              </Clipboard.Indicator>
              <Text ml={2}>Email</Text>
            </Button>
          </Clipboard.Trigger>
        </Clipboard.Root>
      </Flex>

      <Text fontSize="xs" color={textColor} letterSpacing="widest">
        © 2026 ANKITA VARIGONDA
      </Text>
    </Flex>
  );
}

export default Footer;
