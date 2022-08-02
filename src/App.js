import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddToDo from "./components/AddToDo";
import UpdateToDo from "./components/UpdateToDo";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddToDo />} />
          <Route path="/update/:id" element={<UpdateToDo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Navbar>
    </div>
  );
}

export default App;
