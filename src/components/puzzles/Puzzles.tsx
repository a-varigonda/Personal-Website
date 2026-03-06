import { Box, Center, Flex, SimpleGrid } from "@chakra-ui/react";
import ColorMode from "../generic/ColorMode";
import { MouseFollower } from "../generic/Mouse";
import SideBar from "../generic/SideBar";
import Footer from "../generic/Footer";
import { ScrollToTop } from "../generic/ScrollTop";
import { gallery } from "./Gallery";
import Gcard from "./Gcard";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function Puzzles({ pages, currentPage, onClick }: Props) {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box flex="1">
          <Center mt={10} fontSize="6xl">
            Puzzles
          </Center>
          <Center mt={10} fontSize="xl">
            Here are some of the puzzles I've done!
          </Center>
          <SimpleGrid
            columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
            gap={6}
            padding={10}
          >
            {gallery.map((img) => (
              <Gcard key={img.id} g={img} />
            ))}
          </SimpleGrid>
        </Box>
        <Footer />
      </Flex>

      <ScrollToTop />
      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default Puzzles;
