import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterEmailPage from "./pages/RegisterEmailPage"
import RegisterPasswordPage from "./pages/RegisterPasswordPage"
import RegisterOTPPage from "./pages/RegisterOTPPage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterEmailPage />}/>
      <Route path="/register/otp" element={<RegisterOTPPage />}/>
      <Route path="/register/password" element={<RegisterPasswordPage />}/>
    </Routes>
  )
}

export default App
