import logo from './logo.svg';
import './App.css';
import './snippet'
import Snippet from './snippet';
import { Component } from 'react';

class App extends Component{
  render() {
    const users = [
      {
          gender: 'man',
      },
      {
          gender: 'woman',
      },
      {
          gender: 'man',
      }
  ]
    return (
    <div className="App">
        <Snippet users={users}></Snippet>
    </div>
  );
  }
}

export default App;
