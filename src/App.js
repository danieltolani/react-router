import Home from "./components/Home";
import About from "./components/About";
import Schools from "./components/Schools";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layout";
import Engineering from "./components/Engineering";
import Students from "./components/Students";

import "../src/styles/App.css";

import { BrowserRouter as Router, Routes, Route, json } from "react-router-dom";
import React, {useEffect,useState} from "react";

const App = () => {

  const [studentBio, setStudentBio] = useState({
      imgUrl:"",
      firstName:"",
      lastName:"",
      reg_num:"",
  })

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=100')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log("There was an error")
        }
      })
      .then(res => setStudentBio(res.results))
      // .catch(error => console.log('Error'))
    // return () => {
    //   cleanup;
    // };
  }, []);
  
  console.log(studentBio[0])

  const gender = studentBio;

  console.log(gender)

  return (
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
  );
};

export default App;
