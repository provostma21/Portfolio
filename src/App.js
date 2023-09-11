import Home from "../src/pages/Home";
// import ProjectList from "./components/ProjectList";
import Project from "../src/components/Projects/Projects";
import Contact from "../src/pages/Contact";
// import Resume from "../src/pages/Resume";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <Contact />
        <Project />
      </header>
    </div>
  );
}

export default App;
