import React from "react";
import {BrowserRouter as Router,
Route, 
Routes } from "react-router-dom";
import Menu from './components/Menu/Menu'
import HomePage from "./pages/homePage/HomePage";
import AboutPage from './pages/AboutPage/AboutPage'
import ToDoPage from './pages/ToDoPage/ToDoPage'
import JokesPage from './pages/JokesPage/JokesPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'


function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/Home' element={<HomePage />} />
        <Route exact path='/AboutPage' element={<AboutPage />} />
        <Route exact path='/ToDo' element={<ToDoPage />} />
        <Route exact path='/Jokes' element={<JokesPage />} />
        <Route exact path='/Register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;

