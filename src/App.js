import Home from "./components/Home";
import About from "./components/About";
import Schools from "./components/Schools";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Engineering from "./components/Engineering";
import Students from "./components/Students";
import { UserContext } from "./components/UserContext";

import "../src/styles/App.css";

import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import React, { useEffect, useState, useContext, useMemo } from "react";
import { useFetch } from "./components/useFetch";

const App = () => {
  const [me, setMe] = useState([])

  const { data } = useFetch(
    "https://randomuser.me/api/?results=100"
  );

  const meMain = useMemo(() => (data))

  console.log(meMain)
  return (
    <UserContext.Provider value="Hello">
      <Router>
        {/* layout component containing navs */}
        <Layout />

        <main className="main-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="schools" element={<Schools />}>
              <Route path="engineering" element={<Engineering />} />
            </Route>

            <Route path="students" element={<Students />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
