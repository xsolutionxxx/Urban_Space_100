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
        <Container clases="flex flex-1 flex-col gap-5">
          <Product />
          <Product />
          <Product />
          <Product />
        </Container>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
