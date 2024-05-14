import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NewArrival from "./pages/NewArrival";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newarrivals" element={<NewArrival />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/product" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
