import { Box, Center, Flex, Stack } from "@chakra-ui/react";
import ColorMode from "../generic/ColorMode";
import { MouseFollower } from "../generic/Mouse";
import SideBar from "../generic/SideBar";
import Item from "./Item";
import projects from "src/assets/projects.json";
import courses from "src/assets/courses.json";
import Footer from "../generic/Footer";
import { ScrollToTop } from "../generic/ScrollTop";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function PgCW({ pages, currentPage, onClick }: Props) {
  return (
    <>
      <Flex direction="column" minH="100vh">
        <Box flex="1">
          <Center mt={10} fontSize="6xl" textAlign="center">
            Projects & Coursework
          </Center>

          <Center m={7} fontSize="3xl">
            Projects
          </Center>

          <Stack gap={5}>
            {projects.map((item) => (
              <Item
                key={item.Project}
                title={item.Project}
                body={item.Description}
                techIcons={item.Technologies}
              />
            ))}
          </Stack>

          <Center m={7} mt={10} fontSize="3xl">
            Coursework
          </Center>

          <Stack gap={5}>
            {courses.map((item) => (
              <Item
                key={item.Number}
                title={`${item.Number} - ${item.Course} ${item.Current == "TRUE" ? "(In Progress)" : `(${item.Semester})`}`}
              />
            ))}
          </Stack>
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

export default PgCW;
