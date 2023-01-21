import { useState } from "react";
import "./App.css";
import Profilephoto from "./componnent/profile/Profilephoto";
import Fullname from "./componnent/profile/Fullname";
import Address from "./componnent/profile/Address";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Profilephoto></Profilephoto>
      <Fullname></Fullname>
      <Address></Address>
    </div>
  );
}

export default App;
