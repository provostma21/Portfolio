import Home from "../src/pages/Home";
import ProjectGrid from "./components/Projects";
import Contact from "../src/pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <ProjectGrid />
        <Contact />
      </header>
    </div>
  );
}

export default App;
