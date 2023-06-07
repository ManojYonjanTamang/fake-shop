import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="product/:productId" exact element={<ProductDetail />} />
          <Route>404 Page Not Found!</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
