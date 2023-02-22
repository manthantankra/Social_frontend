import "./App.css"
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);


  useEffect(() => {
    (async () => {
      const profileUser = await JSON.parse(localStorage.getItem("profile"));
      dispatch({ type: "AUTH_SUCCESS", data: profileUser })
    })()
  }, [])

  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%', left: '-8rem' }}></div>
      <Routes>
        <Route path='/' element={user ? <Navigate to="home" /> : <Navigate to="auth" />} />
        <Route path='/home' element={user ? <Home /> : <Navigate to='../auth' />} />
        <Route path='/auth' element={user ? <Navigate to="../home" /> : <Auth />} />
        <Route path='/profile/:id' element={user ? <Profile /> : <Navigate to='../auth' />} />
      </Routes>
    </div>
  );
}

export default App;
