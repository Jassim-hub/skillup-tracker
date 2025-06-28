import { Routes, Route } from "react-router-dom"; //Routing components
import Home from "./pages/Home"; //Home page component
import Login from "./pages/Login"; //Login page component
import Dashboard from "./pages/Dashboard"; //Dashboard page component
import Navbar from "./components/Navbar"; //Navigation component
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/*When URL is "/" show Home*/}
        <Route path="/login" element={<Login />} />
        {/*When URL is "/login" show Login*/}
        <Route path="/dashboard" element={<Dashboard />} />
        {/*When URL "/dashboard", show Dashboard */}
      </Routes>
    </>
  );
}
export default App;
