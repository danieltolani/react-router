import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Schools from "./components/Schools";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Engineering from "./components/Engineering";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* layout component containing navs */}
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="schools" element={<Schools />}>
          <Route path='engineering' element={<Engineering />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

    // <div className="App">

    // </div>
  );
}

export default App;
