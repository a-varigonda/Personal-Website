import { Center } from "@chakra-ui/react";
import Titles from "./Titles";
import Tags from "./Tags";

function HomePage() {
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
    </>
  );
}

export default HomePage;
