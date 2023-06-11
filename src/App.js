import "./App.css";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Theory from "./Theory";
import Design from "./Design";
import Art from "./Art";
import blogone from "./blogone";
import blogtwo from "./blogtwo";
import styleguide from "./styleguide";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/theory" Component={Theory} />
        <Route exact path="/design" Component={Design} />
        <Route exact path="/art" Component={Art} />
        <Route exact path="/blogone" Component={blogone} />
        <Route exact path="/blogtwo" Component={blogtwo} />
        <Route exact path="/styleguide" Component={styleguide} />
      </Routes>
    </div>
  );
}

export default App;
