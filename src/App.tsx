import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { Lodging } from "./Pages/Lodging";
import { Notfound } from "./Pages/NotFound";

import "./style/global.scss";
import "./style/reset.scss";
import "./style/variables.scss";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
          <Route path="/about" element={<About />} />
          <Route path="/lodging/:id" element={<Lodging />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
