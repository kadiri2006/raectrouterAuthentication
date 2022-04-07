import { Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage";
import LoginPage from "./components/loginpage";
import ProtectedPage from "./components/protectedpage";
import Selection from "./components/selection";
import "./styles.css";

export default function App() {
  return (
    <>
      <Selection>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/protect" element={<ProtectedPage />} />
        </Routes>
      </Selection>
    </>
  );
}
