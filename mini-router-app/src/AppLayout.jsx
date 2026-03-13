import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import "./App.css";

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default AppLayout
