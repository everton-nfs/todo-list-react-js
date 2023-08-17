import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home} from "../pages/Home";
import { SignIn } from "../pages/SignIn";

export function PathRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  )
}