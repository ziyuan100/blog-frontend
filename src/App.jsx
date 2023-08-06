/* eslint-disable react/prop-types */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<InvalidPage />} />
    </Routes>
  )
}



function Login(){
  return(
    <h1>Login Test!</h1>
  )
}

function InvalidPage(){
  return <h1>Error 404 Not Found</h1>
}

export default App
