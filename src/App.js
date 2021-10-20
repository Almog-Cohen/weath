import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Weather from "./components/Weather/Weather";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/weather">
            <Weather />
          </Route>
          <Route path="/favorites"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
