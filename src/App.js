// src/App.js

import Posts from "./components/Posts";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo style={{ height: 200 }} />
        <h1>React Posts Sharer</h1>
        <h2>Bad man rude boy</h2>
      </header>
      <Posts/>
    </div>
  );
}

export default App;