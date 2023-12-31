/* eslint-disable react/prop-types */
import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login'
import New from './Pages/New';
import Edit from './Pages/Edit';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:tag" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/new" element={<New />}/>
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="*" element={<InvalidPage />} />
    </Routes>
  )
}

function InvalidPage(){
  return <h1>Error 404 Not Found</h1>
}

export default App
