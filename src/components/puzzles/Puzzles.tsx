import { Center, SimpleGrid } from "@chakra-ui/react";
import { gallery } from "./Gallery";
import Gcard from "./Gcard";

function Puzzles() {
  return (
    <>
      <Center mt={10} fontSize="6xl">
        Puzzles
      </Center>
      <Center mt={10} fontSize="xl">
        Here are some of the puzzles I've done!
      </Center>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={6} padding={10}>
        {gallery.map((img) => (
          <Gcard key={img.id} g={img} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Puzzles;
