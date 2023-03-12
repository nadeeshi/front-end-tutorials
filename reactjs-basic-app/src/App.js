import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./router/pages/Layout";
import Home from "./router/pages/Home";
import Blogs from "./router/pages/Blogs";
import Contact from "./router/pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> }></Route>
        <Route path="blogs" element={ <Blogs /> }></Route>
        <Route path="contact" element={ <Contact /> }></Route>
      </Route>
    </Routes>
  </BrowserRouter>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
