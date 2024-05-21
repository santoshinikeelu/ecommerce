import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import NewArrival from "./components/NewArrival";
import Contact from "./components/Contact";
import Product from "./components/Product";
import Ethnic from "./components/pages/Ethnicwear";
import Western from "./components/pages/WesternWear";
import Footware from "./components/pages/FootWear";
import Accessories from "./components/pages/Accessories";
import Beauty from "./components/pages/Beauty";
import Jewellery from "./components/pages/Jewellery";
import SingleProduct from "./components/common/SingleProduct";

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
        <Route path="/singleproduct" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
