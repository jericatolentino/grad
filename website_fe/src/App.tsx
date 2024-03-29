import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import UsersList from './containers/UsersList';
import ResponsiveAppBar from './AppBar';
import HomePage from './containers/HomePage';
import ContactUsPage from './containers/ContactUsPage';

const websiteWrapper = (component: JSX.Element | string): JSX.Element =>
  <div style={{
    height: '94vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    {component}
  </div >

function App(): JSX.Element {
  return (
    <Router>
      <div className='App'>
        <header className='App-container'>
          <ResponsiveAppBar
            pages={['Home', 'About', 'Users', 'Contact us']}
          />
          {/* A <Routes> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          <Routes>
            <Route path='/contact-us' element={websiteWrapper(<ContactUsPage />)} />
            <Route path='/users' element={websiteWrapper(<UsersList />)} />
            <Route path='/users:name' element={websiteWrapper(<UsersList />)} />
            <Route path='/about' element={websiteWrapper('About PAGE :D')} />
            <Route path='/' element={websiteWrapper(<HomePage/>)} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
