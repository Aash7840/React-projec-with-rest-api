import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/pages/layout/Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import View from "./components/View";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/user/add" component={AddUser} />
        <Route exact path="/user/edit/:id" component={EditUser} />
        <Route exact path="/user/view/:id" component={View} />
        <Route component={NotFound} />
      

      </Switch> 
    </div>
    </Router>
  );
}
export default App;
