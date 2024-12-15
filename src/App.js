import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StreamList from './StreamList';
import Movies from './Movies';
import Cart from './Cart';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">StreamList</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/movies" component={Movies} />
          <Route path="/cart" component={Cart} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
