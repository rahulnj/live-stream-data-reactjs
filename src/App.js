import { Route, Routes } from "react-router-dom"
import { Signin, Signup } from "./components";
import { HomeScreen, LiveStreamScreen, PageNotFound } from "./screens";



const App = () => {
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
          <HomeScreen />
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
