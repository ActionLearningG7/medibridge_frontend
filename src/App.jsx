import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import Login from "./pages/Login";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import BookAppointment from "./pages/BookAppointment";
import ChooseService from "./pages/ChooseService";
import CreateProfile from "./pages/CreateProfile";
import EmergencySOS from "./pages/EmergencySOS";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/ChooseService" element={<ChooseService />} />
        <Route path="/CreateProfile" element={<CreateProfile />} />
        <Route path="/EmergencySOS" element={<EmergencySOS />} />
        <Route  
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

