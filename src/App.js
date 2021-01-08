import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Section from "./components/Section.js"
import Span from "./components/Span.js";
import { useState } from "react";
import "./App.css"
let id = 0;
function App() {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [taskItems, setTaskItems] = useState([]);
  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const result = taskItems.length;
  if ((result === 0) && (isVisible)) {
    setIsVisible(false)
  }
  else if ((result > 0) && (!isVisible)) {
    setIsVisible(true);
  }
  const handleClick = (ev) => {

    if (ev.key === "Enter") {
      if (name) {
        id++;
        setTaskItems((prev) => [...prev, { id, name, status: false }]);
        setName("");
        ev.preventDefault();
      }
      else {
        console.log("boş input!!!");
        ev.preventDefault();
      }

    }
  }



  return (

    <div>
      <section className="todoapp">
        <Header name={name} event={handleChangeName} handleKey={handleClick} />
        <Section taskItems={taskItems} setTaskItems={setTaskItems} />
        {isVisible && (
          <>
            <Span itemLength={result} taskItems={taskItems} setTaskItems={setTaskItems} />
          </>
        )}

      </section>
      <Footer />

    </div >
  );
}

export default App;
