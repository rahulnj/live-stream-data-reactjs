import { Route, Routes } from "react-router-dom"
import { Signin, Signup } from "./components";
import { HomeScreen, LiveStreamScreen } from "./screens";



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/signin' element={
          <Signin />
        }>
        </Route >
      </Routes>
      <Routes>
        <Route path='/signup' element={
          <Signup />
        }>
        </Route >
      </Routes>
      <Routes>
        <Route path='/' element={
          <HomeScreen />
        }>
        </Route >
      </Routes>
      <Routes>
        <Route path='/live' element={
          <LiveStreamScreen />
        }>
        </Route >
      </Routes>
    </>
  )
}

export default App;
