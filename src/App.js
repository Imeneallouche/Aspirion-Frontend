import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";

function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/" component={SignInPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
