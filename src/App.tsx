import { useState } from "react";
import HomePage from "./components/home/HomePage";
import PgCw from "./components/pgcw/PgCw";
import Puzzles from "./components/puzzles/Puzzles";
import Contact from "./components/contact/Contact";
import { Toaster } from "./components/ui/toaster";
import SideBar from "./components/generic/SideBar";
import { Box, Flex } from "@chakra-ui/react";
import { ScrollToTop } from "./components/generic/ScrollTop";
import ColorMode from "./components/generic/ColorMode";
import { MouseFollower } from "./components/generic/Mouse";
import Footer from "./components/generic/Footer";

function App() {
  const pages = ["Home", "Projects & Coursework", "Puzzles", "Contact"];
  const [curPage, setCurPage] = useState("Home");

  return (
    <>
      <SideBar
        pages={pages}
        currentPage={curPage}
        onClick={(text) => setCurPage(text)}
      />

      <Flex direction="column" minH="100vh">
        <Box flex="1">
          <Box ml={0}>
            {curPage === "Home" && <HomePage />}
            {curPage === "Projects & Coursework" && <PgCw />}
            {curPage === "Puzzles" && <Puzzles />}
            {curPage === "Contact" && <Contact />}
          </Box>
        </Box>
        <Footer />
      </Flex>

      <ScrollToTop />
      <ColorMode />
      <MouseFollower />
      <Toaster />
    </>
  );
}

export default App;
