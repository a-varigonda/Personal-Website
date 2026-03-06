import { Center, Stack } from "@chakra-ui/react";
import ColorMode from "./generic/ColorMode";
import { MouseFollower } from "./generic/Mouse";
import SideBar from "./generic/SideBar";
import Item from "./pgcw/Item";
import projects from "src/assets/projects.json";
import courses from "src/assets/courses.json";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function PgCW({ pages, currentPage, onClick }: Props) {
  return (
    <>
      <Center mt={10} fontSize="6xl">
        Projects & Coursework
      </Center>

      <Center m={7} fontSize="3xl">
        Projects
      </Center>

      <Stack gap={5}>
        {projects.map((item) => (
          <Item title={item.Project} body={item.Description} />
        ))}
      </Stack>

      <Center m={7} mt={10} fontSize="3xl">
        Coursework
      </Center>

      <Stack gap={5}>
        {courses.map((item) => (
          <Item
            title={`${item.Number} - ${item.Course} ${item.Current == "TRUE" ? "(In Progress)" : `(${item.Semester})`}`}
            body=""
          />
        ))}
      </Stack>

      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default PgCW;
