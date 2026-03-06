import { Box, Center, Flex } from "@chakra-ui/react";
import Titles from "./Titles";
import Tags from "./Tags";
import ColorMode from "../generic/ColorMode";
import SideBar from "../generic/SideBar";
import { MouseFollower } from "../generic/Mouse";
import Footer from "../generic/Footer";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function HomePage({ pages, currentPage, onClick }: Props) {
  const interests = [
    "Math",
    "Jigsaw Puzzles",
    "Reading",
    "Coding",
    "Volunteering",
    "Sleeping",
    "Potatoes",
  ];

  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box flex="1">
          <Center mt={10} fontSize="3xl">
            Hi 👋, I'm
          </Center>
          <Titles text="ANKITA" />
          <Titles text="VARIGONDA" />
          <Center mt={5} fontSize="3xl">
            and I like:
          </Center>
          <Center mt={5} fontSize="xl">
            <Tags tagList={interests} />
          </Center>
          <Center mt={10} textAlign="center" px={4}>
            I'm a freshman at Carnegie Mellon University studying Mathematical
            Sciences!
          </Center>
        </Box>
        <Footer />
      </Flex>
      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default HomePage;
