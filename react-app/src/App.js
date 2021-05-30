import "./App.css";
import Home from "./pages/Home";
import BuyProduct from "./pages/BuyProduct";
import Buys from "./pages/Buys";
import Admin from "./pages/Admin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/BuyProduct/:id?" component={BuyProduct} exact />
        <Route path="/Buys" component={Buys} exact />
        <Route path="/Admin" component={Admin} exact />
        <Route path="*" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
