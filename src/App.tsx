import SideBar from "./components/SideBar";
import { MouseFollower } from "./components/Mouse";
import Titles from "./components/Titles";

function App() {
  return (
    <>
      <Titles text="ANKITA" />
      <Titles text="VARIGONDA" />
      <SideBar />
      <MouseFollower />
    </>
  );
}

export default App;
