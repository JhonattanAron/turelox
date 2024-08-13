import "./css/App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import Dashboard from "./containers/pages/Dashboard";
import Login from "./containers/pages/Login";
import Register from "./containers/pages/Register";
import VerfiedMailPage from "./containers/pages/VerifiedMail";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Pedidos from "./containers/pages/Pedidos";
import ProfilePage from "./containers/pages/Profile";

function App() {
  // Mueve la declaración de useLocation dentro del componente App
  const location = useLocation();
  const Session = useSelector((state: RootState) => state.session.isLogin);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="*" element={<Error404 />} />
      {/*Session de Usuario*/}
      <Route path="/" element={Session ? <Dashboard /> : <Home />} />
      <Route path="/home" element={Session ? <Dashboard /> : <Home />} />
      <Route path="/pedidos" element={Session ? <Pedidos /> : <Home />} />
      <Route path="/board" element={Session ? <Dashboard /> : <Home />} />
      <Route path="/profile" element={Session ? <ProfilePage /> : <Home />} />
      {/*Usuario sin Session */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mail_verification/:token" element={<VerfiedMailPage />} />
    </Routes>
  );
}

export default App;
