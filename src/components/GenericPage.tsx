import { Center } from "@chakra-ui/react";
import ColorMode from "./generic/ColorMode";
import { MouseFollower } from "./generic/Mouse";
import SideBar from "./generic/SideBar";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function GenericPage({ pages, currentPage, onClick }: Props) {
  return (
    <>
      <Center mt={10} fontSize="6xl">
        Projects & Coursework
      </Center>
      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default GenericPage;
