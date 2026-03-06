import ColorMode from "./colorMode";
import { MouseFollower } from "./Mouse";
import SideBar from "./SideBar";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}
function Puzzles({ pages, currentPage, onClick }: Props) {
  return (
    <>
      <p>Puzzles</p>
      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default Puzzles;
