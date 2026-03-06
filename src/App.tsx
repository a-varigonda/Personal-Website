import { useState } from "react";
import HomePage from "./components/HomePage";
import PgCw from "./components/PgCw";
import Puzzles from "./components/Puzzles";
import Contact from "./components/Contact";

function App() {
  const pages = ["Home", "Projects & Coursework", "Puzzles", "Contact"];
  const [curPage, setCurPage] = useState("Projects & Coursework");
  return (
    <>
      {curPage == "Home" && (
        <HomePage
          onClick={(text) => setCurPage(text)}
          currentPage={curPage}
          pages={pages}
        />
      )}
      {curPage == "Projects & Coursework" && (
        <PgCw
          onClick={(text) => setCurPage(text)}
          currentPage={curPage}
          pages={pages}
        />
      )}
      {curPage == "Puzzles" && (
        <Puzzles
          onClick={(text) => setCurPage(text)}
          currentPage={curPage}
          pages={pages}
        />
      )}
      {curPage == "Contact" && (
        <Contact
          onClick={(text) => setCurPage(text)}
          currentPage={curPage}
          pages={pages}
        />
      )}
    </>
  );
}

export default App;
