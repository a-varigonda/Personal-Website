import { Center, Stack } from "@chakra-ui/react";
import ColorMode from "./generic/ColorMode";
import { MouseFollower } from "./generic/Mouse";
import SideBar from "./generic/SideBar";
import Item from "./pgcw/Item";
import projects from "src/assets/projects.json";
import courses from "src/assets/courses.json";

import bs from "src/assets/icons/bs.png";
import cs from "src/assets/icons/cs.png";
import ht from "src/assets/icons/ht.png";
import js from "src/assets/icons/js.png";
import py from "src/assets/icons/py.png";
import rt from "src/assets/icons/rt.png";
import ts from "src/assets/icons/ts.png";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function PgCW({ pages, currentPage, onClick }: Props) {
  const iconMap: Record<string, string> = {
    React: rt,
    TypeScript: ts,
    HTML: ht,
    CSS: cs,
    JavaScript: js,
    Bootstrap: bs,
    Python: py,
  };

  return (
    <>
      <Center mt={10} fontSize="6xl">
        Projects & Coursework
      </Center>

      <Center m={7} fontSize="3xl">
        Projects
      </Center>

      <Stack gap={5}>
        {projects.map((item) => {
          const icons = item.Technologies.split(" ").map(
            (name) => iconMap[name],
          );

          return (
            <Item
              key={item.Project}
              title={item.Project}
              body={item.Description}
              techIcons={icons}
            />
          );
        })}
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

      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default PgCW;
