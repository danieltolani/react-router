import Home from "./components/Home";
import About from "./components/About";
import Schools from "./components/Schools";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Engineering from "./components/Engineering";
import Students from "./components/Students";
import { UserFetch } from "./components/utils/userData";
import { UserContext } from "./components/UserContext";
import { useMemo, useState } from "react";
import "../src/styles/App.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";

const App = () => {
  
  const ff = UserFetch(); 
  const [user, setUser] = useState('hello from context')

  const value = useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <UserContext.Provider value={value}>
      <Router>
        {/* layout component containing navs */}
        <Layout />

        <main className="main-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schools" element={<Schools />}>
              <Route path="engineering" element={<Engineering />} />
            </Route>

            <Route path="/students" element={<Students />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
