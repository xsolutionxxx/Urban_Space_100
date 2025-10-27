import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from "./Container";
import Header from "./Header";
import Product from "./ProductVertical";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Container>
          <Product />
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
