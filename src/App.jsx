import { Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./routes/Register.jsx";
import Login from "./routes/Login.jsx";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default App;
