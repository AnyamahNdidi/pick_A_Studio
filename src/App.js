import logo from './logo.svg';
import './App.css';
import Home from './components/oluruda/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/oluruda/NavBar/index";
import SideBar from "./components/oluruda/SideBar/SideBar";
import React from "react"
import Explorlisting from "./components/Gideon/ExplorListing"
import Cartpage from "./components/Malush/CartPage/CartPage"
import Reg from "./components/Malush/Reg/Register"
import Footer from "./components/oluruda/Footer/index"
import HomePeter from "./components/Peter/HomePeter"
import { AppProvider } from "./components/GlobalAuth/GlobalAuth"
import Load from './components/Malush/Reg/Load';
import EploreDetails from './components/Gideon/EploreDetails';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AppProvider>
      <Router>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explorlisting" component={Explorlisting} />
          <Route exact path="/cartpage" component={Cartpage} />
          <Route exact path="/register" component={Reg} />
          <Route exact path="/dashoard" component={HomePeter} />
          <Route exact path="/load" component={Load} />
          <Route exact path="/details/:id" component={EploreDetails} />
        </Switch>
        <Footer />
      </Router>
    </AppProvider>


  );
}

export default App;
