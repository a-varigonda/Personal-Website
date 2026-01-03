import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisible] = useState(true);

  return (
    <>
      {alertVisible && <Alert onClick={() => setAlertVisible(!alertVisible)} />}
    </>
  );
}

export default App;
