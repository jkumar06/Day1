import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    
  <BrowserRouter>
  <Switch>
  <Route exact path="/">
      <Login />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/home">
      <Home />
    </Route>
  </Switch>
 </BrowserRouter>
  );
}

export default App;
