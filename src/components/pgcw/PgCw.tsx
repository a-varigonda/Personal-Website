import { Center, Stack } from "@chakra-ui/react";
import Item from "./Item";
import projects from "src/assets/projects.json";
import courses from "src/assets/courses.json";

function PgCW() {
  return (
    <>
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
    </>
  );
}

export default PgCW;
