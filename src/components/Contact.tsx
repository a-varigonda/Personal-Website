import ColorMode from "./generic/ColorMode";
import { MouseFollower } from "./generic/Mouse";
import SideBar from "./generic/SideBar";

interface Props {
  pages: string[];
  currentPage: string;
  onClick: (page: string) => void;
}

function Contact({ pages, currentPage, onClick }: Props) {
  return (
    <>
      <p>Contact</p>
      <ColorMode />
      <SideBar currentPage={currentPage} onClick={onClick} pages={pages} />
      <MouseFollower />
    </>
  );
}

export default Contact;
