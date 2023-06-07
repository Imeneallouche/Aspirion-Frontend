import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import SignUpPage from "./Pages/SignUpPage";
import ChatPage from "./Pages/ChatPage";
import FriendChatPage from "./Pages/FriendChatPage";

function App() {
  return (
    <div className="App w-screen h-screen">
      <Router>
        <Switch>
          <Route path="/" component={SignInPage} exact />
          <Route path="/SignUp" component={SignUpPage} exact />
          <Route path="/Chat" component={ChatPage} exact />
          <Route path="/Chat/:username" component={FriendChatPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
