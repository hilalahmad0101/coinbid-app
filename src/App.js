import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import Home from "./home/Home";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Download from "./componets/download/Download";
import './App.css'
import { useState } from "react";
import About from "./pages/About";
function App() {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/download" element={<Download sidebar={sidebar} setSidebar={setSidebar} />} /> */}
          <Route path="/about" element={<About sidebar={sidebar} setSidebar={setSidebar} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
