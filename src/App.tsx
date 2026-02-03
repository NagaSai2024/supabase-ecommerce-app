import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterEmailPage from "./pages/RegisterEmailPage"
import RegisterPasswordPage from "./pages/RegisterPasswordPage"
import RegisterOTPPage from "./pages/RegisterOTPPage"
import HomeLayout from "./components/Home/HomeLayout"
import LoginLayout from "./components/common/LoginLayout"

function App() {

  return (
    <Routes>
      
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route element={<LoginLayout />}>
        <Route path="/login" element={<LoginPage /> } />
        <Route path="/register" element={<RegisterEmailPage /> } />
        <Route path="/register/otp" element={<RegisterOTPPage /> } />
        <Route path="/register/password" element={<RegisterPasswordPage /> } />
      </Route>

    </Routes>
  )
}

export default App
