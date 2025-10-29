import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductContainer from "./ProductContainer";
import { LayoutProvider } from "../context/LayoutProvider";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <LayoutProvider>
          <Header />
          <ProductContainer />
          <Footer />
        </LayoutProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
