import { useState } from "react";
import HomePage from "./components/home/HomePage";
import PgCw from "./components/pgcw/PgCw";
import Puzzles from "./components/Puzzles";
import Contact from "./components/contact/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  const pages = ["Home", "Projects & Coursework", "Puzzles", "Contact"];
  const [curPage, setCurPage] = useState("Contact");
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
      <Toaster />
    </>
  );
}

export default App;
