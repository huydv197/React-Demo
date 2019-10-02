import React from 'react';
import './App.css';
import ListDemo from './components/ListDemo';
import ItemDemo from './components/ItemDemo';
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import routes from './router'

function App() {
  return (
   <Router> 
    <div className="App">
      <Route path="/" exact component={ListDemo}/>
      <Route path="/details/:id" component={ItemDemo}/>
    </div>
    </Router>
  );
}

export default App;
