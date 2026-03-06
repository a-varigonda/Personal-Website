import { Center } from "@chakra-ui/react";
import ColorMode from "./generic/ColorMode";
import { MouseFollower } from "./generic/Mouse";
import SideBar from "./generic/SideBar";
import Item from "./pgcw/Item";

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

      <Item title="t" body="p" />

      <Center m={7} fontSize="3xl">
        Coursework
      </Center>

      <Item title="t" body="p" />

      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default PgCW;
