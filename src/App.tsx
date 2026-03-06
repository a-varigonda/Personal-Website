import SideBar from "./components/SideBar";
import { MouseFollower } from "./components/Mouse";
import Titles from "./components/Titles";
import { Center } from "@chakra-ui/react";
import ColorMode from "./components/colorMode";
import Tags from "./components/Tags";

function App() {
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
      <SideBar />
      <MouseFollower />
    </>
  );
}

export default App;
