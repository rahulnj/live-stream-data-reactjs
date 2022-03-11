import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom"
import { Signin, Signup } from "./components";
import { HomeScreen, LiveStreamScreen, PageNotFound } from "./screens";

const App = () => {
  const [logOut, SetLogout] = useState(false)

  const navigate = useNavigate()
  let data
  useEffect(() => {
    data = localStorage.getItem('user')

    if (!data) {
      navigate('/signin')
    }
  }, [data, navigate, logOut])

  return (
    <>
      <Routes>
        <Route path='/signin' element={
          <Signin />
        }>
        </Route >
        <Route path='/signup' element={
          <Signup />
        }>
        </Route >
        <Route path='/' element={
          <HomeScreen SetLogout={SetLogout} />
        }>
        </Route >
        <Route path='/live' element={
          <LiveStreamScreen />
        }>
        </Route >
        <Route path='*' element={
          <PageNotFound />
        }>
        </Route >
      </Routes>
    </>
  )
}

export default App;
