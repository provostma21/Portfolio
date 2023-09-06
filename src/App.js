import Home from "../src/pages/Home";
import ProjectList from "./components/ProjectList";
import Contact from "../src/pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
        <ProjectList />
        <Contact />
      </header>
    </div>
  );
}

export default App;
