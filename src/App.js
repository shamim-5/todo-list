import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddToDo from "./components/AddToDo";
import ShowToDo from "./components/ShowToDo";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddToDo />} />
          <Route path="/show" element={<ShowToDo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
