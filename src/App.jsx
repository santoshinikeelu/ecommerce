import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NewArrival from "./pages/NewArrival";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Ethnic from "./pages/Products/Ethnicwear";
import Western from "./pages/Products/WesternWear";
import Footware from "./pages/Products/FootWear";
import Accessories from "./pages/Products/Accessories";
import Beauty from "./pages/Products/Beauty";
import Jewellery from "./pages/Products/Jewellery";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/newarrivals" element={<NewArrival />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ethnic" element={<Ethnic />} />
        <Route path="/western" element={<Western />} />
        <Route path="/footware" element={<Footware />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/jewellery" element={<Jewellery />} />
      </Routes>
    </>
  );
}

export default App;
