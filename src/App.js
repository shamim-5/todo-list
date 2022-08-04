import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AddToDo from "./components/AddToDo";
import UpdateToDo from "./components/UpdateToDo";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import Completed from "./components/Completed";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddToDo />} />
          <Route path="/update/:id" element={<UpdateToDo />} />
          <Route path="/completed/:id" element={<Completed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Navbar>
    </div>
  );
}

export default App;
