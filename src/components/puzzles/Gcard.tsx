import { AspectRatio, Box, Card, Heading, Image } from "@chakra-ui/react";
import type { Gallery } from "./Gallery";

interface Props {
  g: Gallery;
}

function Gcard({ g }: Props) {
  return (
    <>
      <Box borderRadius={10} overflow="hidden">
        <Card.Root
          maxW="sm"
          overflow="hidden"
          variant="outline"
          bg="blackAlpha.300"
          backdropFilter="blur(10px)"
          borderColor="whiteAlpha.200"
          _hover={{ transform: "translateY(-5px)", borderColor: "purple.400" }}
          transition="all 0.3s"
        >
          <AspectRatio ratio={16 / 9}>
            <Image src={g.image} objectFit="cover" />
          </AspectRatio>
          <Card.Body>
            <h1>{g.pieces} pieces</h1>
          </Card.Body>
        </Card.Root>
      </Box>
    </>
  );
}

export default Gcard;
