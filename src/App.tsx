import { useState } from "react";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";

function App() {
  const [alertVisible, setAlertVisible] = useState(true);

  return (
    <>
      {alertVisible && <Alert onClick={() => setAlertVisible(!alertVisible)} />}
      <NavBar />
    </>
  );
}

export default App;
