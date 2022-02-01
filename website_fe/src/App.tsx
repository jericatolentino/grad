import React from 'react';
import './App.css';
import UsersList from './containers/UsersList';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <UsersList/>
      </header>
    </div>
  );
}

export default App;
