import { useState, useEffect } from "react";
import FacebookMessengerChat from "./FacebookMessengerChat";

function App() {
  const [pageId, setpageId] = useState("108965818922829");
  useEffect(() => {
    const generateRandomNumber = () => {
      const number = Math.floor(Math.random() * 2);
      setpageId(["108965818922829", "104588581239094"][number]);
    };

    // Call the generateRandomNumber function when the component mounts
    generateRandomNumber();
  }, []);
  return (
    <>
      <FacebookMessengerChat />
    </>
  );
}

export default App;
