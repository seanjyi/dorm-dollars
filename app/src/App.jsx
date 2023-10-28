import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import History from './routes/history/History'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home'
// import Login from './routes/login/login';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(true)
  const [userData, setUserData] = useState(
    {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      userId: -1
    }
  )


  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <BrowserRouter>
        {loggedIn && <Navbar/>}
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} />}/>
          <Route path="/history/" element={<History loggedIn={loggedIn} userData={userData}/>}/>
          {/* <Route path="/login/" 
            element={
              <Login
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                userData={userData}
                setUserData={setUserData}
              />
            }
          /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
