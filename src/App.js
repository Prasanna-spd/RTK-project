import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Detail from "./components/details/detail";
import PageNotFound from "./components/pageNotFound/pageNotFound";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:imdbID" element={<Detail />} />
            <Route exact path="*" element={<PageNotFound />} />
          </Routes>
        </div>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
