import "./App.css";
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* <Router> */}
        {/* <Section /> */}
        <Navbar />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
        </Switch> */}
      {/* </Router> */}
    </div>
  );
}

export default App;
