import Pay         from "./pages/Pay";
import Success     from "./pages/Success";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {

  return (
    <div className="App">
            <Router>
              <Switch>
                <Route path="/pay">
                  <Pay></Pay>
                </Route>
                <Route path="/success">
                  <Success></Success>
                </Route>
              </Switch>
            </Router>
    </div>
  );
}

export default App;