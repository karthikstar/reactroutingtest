import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail'

// we want to import specific things from react router dom
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path = "/" exact component = {Home} />
          <Route path = "/about" component = {About} />
          <Route path = "/shop" exact component = {Shop} />
          <Route path = "/shop/:id" component= {ItemDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return(
    <div>
      <h1> Home Page </h1>
      <h3>Hi there,this is a test project to learn more about React Routing</h3>
    </div>    
  )
}

export default App;

// i want nav to be rendered all the time 
// but when i go to about page, then only i want to render About component
// and when i go to shop page the i want to render the shop page.

// in the route element we pass in a path prop, and a comp prop to indicate which prop to render when we go to that specified path

// !!! line 16 - SPECIFYING THAT only if we go to /, then the home component is renderd, anythn that comes after , its not gonna work anymore.

// we need to specify exact component for the home component,to tell react only to render it when the EXACT PATH is '/"
// this is because usually react router renders the component upon first match with the path
// eg if we go to "localhost:3000/about" since / first matches with route path for home, it renders home component instead of the about component
