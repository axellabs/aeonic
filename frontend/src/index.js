import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Editor from './Editor'
import Sidebar from './Sidebar'


function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="app container">
        <Editor />
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
