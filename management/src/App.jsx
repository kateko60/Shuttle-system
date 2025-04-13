import Navigation from './navigation.jsx';
import Home from './home.jsx';
import Register from './register.jsx';
import Login from './login.jsx';
import { Route, Routes } from "react-router-dom";
import Shuttle from './shuttle.jsx'
import './App.css';

function App() {
  return (
    <>
      <div className='Navigation-main'>
        <Navigation isLoggedIn={false}/>
      </div>
      <div className='Content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shuttles" element={<Shuttle />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
