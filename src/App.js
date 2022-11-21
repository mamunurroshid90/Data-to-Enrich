import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./routes/Pricing";
import Faq from "./routes/Faq";
import Contact from "./routes/Contact";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Pricing" element={<Pricing></Pricing>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/faq" element={<Faq></Faq>}></Route>
      </Routes>
    </div>
  );
}

export default App;
