import logo from './logo.svg';
import './App.css';

import Home from './views/home';
import Presale from './views/presale';

import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

function App() {
  return (
  	<BrowserRouter history={history}>
	    <div className="App">
		    <Switch>
		    	<Route exact path="/" component={Home} />
		    	<Route exact path="/presale" component={Presale} />
		     </Switch>
	    </div>
    </BrowserRouter>
  );
}

export default App;
