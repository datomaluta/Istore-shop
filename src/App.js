import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Footer from "./layout/footer/Footer";
import Header from "./layout/header/Header";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
