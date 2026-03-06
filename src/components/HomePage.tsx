import { Center } from "@chakra-ui/react";
import Titles from "./home/Titles";
import Tags from "./home/Tags";
import ColorMode from "./generic/ColorMode";
import SideBar from "./generic/SideBar";
import { MouseFollower } from "./generic/Mouse";

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
    "Sleeping",
    "Potatoes",
  ];

  return (
    <>
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
      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default HomePage;
