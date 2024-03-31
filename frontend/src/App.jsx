import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import { Routes, Route } from "react-router-dom";
import Login from "./screens/HomeScreen/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./screens/HomeScreen/Register/Register";
const App = () => {
  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
