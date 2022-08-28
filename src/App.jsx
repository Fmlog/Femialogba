import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Cv from "./components/cv/Cv";
import Projects from "./components/projects/Projects";
import './app.scss'
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Cv/>
        <Projects/>

      </div>
    </div>
  );
}

export default App;
