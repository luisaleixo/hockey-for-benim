import "./App.css";
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Router>
        <Navbar />
        {/* <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/faq" component={Faq} />
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
