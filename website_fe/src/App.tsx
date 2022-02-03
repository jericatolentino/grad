import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import UsersList from './containers/UsersList';

const websiteWrapper = (component: JSX.Element | string): JSX.Element =>
  <div style={{ backgroundColor: 'black', padding: '1em' }}>
    {component}
  </div>

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <header className="App-container">
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Routes>
              <Route path="/users" element={websiteWrapper(<UsersList />)} />
              <Route path="/users:name" element={websiteWrapper(<UsersList />)} />
              <Route path="/about" element={websiteWrapper('About PAGE :D')} />
              <Route path="/" element={websiteWrapper('Home PAGE :)')} />
            </Routes>
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
