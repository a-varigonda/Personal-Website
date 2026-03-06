import { Heading } from "@chakra-ui/react";
import spaceImage from "src/assets/spacebg.webp";

interface Props {
  text: string;
}

function Titles({ text }: Props) {
  return (
    <>
      <Heading
        fontSize={{ base: "6xl", md: "7xl", lg: "9xl" }}
        fontWeight="black"
        bgImage={`url(${spaceImage})`}
        bgRepeat="no-repeat"
        bgClip="text"
        color="transparent"
        lineHeight="1"
        bgAttachment="fixed"
        bgSize="cover"
        textAlign="center"
        width="full"
        display="block"
      >
        {text}
      </Heading>
    </>
  );
}

export default Titles;
