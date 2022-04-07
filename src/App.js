import { Route, Routes } from "react-router-dom";
import Check from "./components/check";
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
          <Route path="/protect" element={<Check />}>
            <Route index element={<ProtectedPage />} />
          </Route>
        </Routes>
      </Selection>
    </>
  );
}
