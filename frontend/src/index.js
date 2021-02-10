import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Editor from "./Editor"

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        Aeonic Notes
      </header>
      <Editor />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
