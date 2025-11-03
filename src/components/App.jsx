import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist";

import Layout from "../layout/Layout";

import { WishlistProvider } from "../context/WishlistProvider";
import { FiltersProvider } from "../context/FiltersProvider";
import { LayoutProvider } from "../context/LayoutProvider";

import socks from "../assets/products/socks.jpg";
import pot from "../assets/products/pot.jpg";
import magnet from "../assets/products/magnet.jpg";

function App() {
  const products = [
    {
      id: 1,
      image: socks,
      category: "шкарпетки",
      brand: "фятб",
      title: "Шкарпетки теплі “Ліжник” сірий",
      description:
        "Теплі, дуже м’які й приємні до ноги шкарпетки. А від дизайну, що візуально наслідує гуцульський ліжник, зігріє ще більше!",
      price: 190.0,
      currency: "₴",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 2,
      image: pot,
      brand: "фятб",
      category: "горнятка",
      title: "Горнятко металеве “Ліжник” білий",
      description:
        "На принті нашого металевого горнятка — теплий карпатський ліжник! Стильний дизайн, натхненний після краси Карпатських гір! Металеве горнятко з ліжником створене з любов’ю і тільки м’якістю.",
      price: 500.0,
      currency: "₴",
      inStock: true,
      isFavorite: false,
    },
    {
      id: 3,
      image: magnet,
      category: "магніти",
      brand: "фятб",
      title: "Магніт дерев’яний “Гуцули”",
      description:
        "Етнографічна пара гуцулів, що проживає в Карпатах. Художньо оформлений сувенір, створений натхненно, яскраво й водночас автентично. Магніт прикрасить вашу кухню або стане приємним подарунком для близьких.",
      price: 350.0,
      currency: "₴",
      inStock: true,
      isFavorite: false,
    },
  ];

  return (
    <BrowserRouter>
      <WishlistProvider>
        <FiltersProvider>
          <LayoutProvider>
            <Routes>
              <Route element={<Layout products={products} />}>
                <Route path="/" element={<Home />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Route>
            </Routes>
          </LayoutProvider>
        </FiltersProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
}

export default App;
