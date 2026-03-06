import ColorMode from "./colorMode";
import { MouseFollower } from "./Mouse";
import SideBar from "./SideBar";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}
function PgCW({ pages, currentPage, onClick }: Props) {
  return (
    <>
      <p>Projects & Coursework</p>
      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default PgCW;
