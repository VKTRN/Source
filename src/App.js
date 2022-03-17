import {useRef} from "react"
import './scss/custom.scss';
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

function App() {

  return (
    <div className="App">
      <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;