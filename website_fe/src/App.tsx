import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UsersList from './containers/UsersList';
import ResponsiveAppBar from './AppBar';

const websiteWrapper = (component: JSX.Element | string): JSX.Element =>
  <div style={{ backgroundColor: 'black', padding: '5em' }}>
    {component}
  </div>

function App(): JSX.Element {
  return (
    <Router>
      <ResponsiveAppBar
        pages={['Home', 'About', 'Users']}
      />
      <div className="App">
        <header className="App-container">
          {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/users" element={websiteWrapper(<UsersList />)} />
            <Route path="/users:name" element={websiteWrapper(<UsersList />)} />
            <Route path="/about" element={websiteWrapper('About PAGE :D')} />
            <Route path="/" element={websiteWrapper('Home PAGE :)')} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
