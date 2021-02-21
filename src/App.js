import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, {component} from 'react';
import Questions from './pages/Questions';

function App() {
  return (
    <div className="App">
				<Switch>
					<Route path="/" component={Questions} />
				</Switch>
    </div>
  );
}

export default App;
