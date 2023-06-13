import "./App.css";
import Nav from "./Nav";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Theory from "./Theory";
import Design from "./Design";
import Art from "./Art";
import blogone from "./blogone";
import blogtwo from "./blogtwo";
import blogthree from "./blogthree";
import blogfour from "./blogfour";
import blogfive from "./blogfive";
import blogsix from "./blogsix";
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
        <Route exact path="/blogthree" Component={blogthree} />
        <Route exact path="/blogfour" Component={blogfour} />
        <Route exact path="/blogfive" Component={blogfive} />
        <Route exact path="/blogsix" Component={blogsix} />
        <Route exact path="/styleguide" Component={styleguide} />
      </Routes>
      <Footer />;
    </div>
  );
}

export default App;
