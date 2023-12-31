import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home} from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { Register } from "../pages/Register";

export function PathRoutes() {
  return (
    <Router
      basename={import.meta.env.DEV ? '/' : '/todo-list-react-js/'}
    >
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>
  )
}