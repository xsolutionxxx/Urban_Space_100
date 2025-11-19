import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "@pages/home/HomePage";
import WishlistPage from "@pages/wishlist/WishlistPage";
import AdminDashboardPage from "@pages/admin/AdminDashboardPage";

import MainLayout from "@components/layout/MainLayout";

import { SettingsProvider } from "@features/settings/SettingsProvider";
import { WishlistProvider } from "@features/wishlist/WishlistProvider";
import { SortProvider } from "@features/sort/SortProvider";
import { FiltersProvider } from "@features/filters/FiltersProvider";
import { LayoutProvider } from "@features/layout/LayoutProvider";

import socks from "@assets/products/socks.jpg";
import pot from "@assets/products/pot.jpg";
import magnet from "@assets/products/magnet.jpg";

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
    <Router basename="/Urban_Space_100/">
      <SettingsProvider>
        <WishlistProvider>
          <FiltersProvider>
            <SortProvider>
              <LayoutProvider>
                <Routes>
                  <Route element={<MainLayout products={products} />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/wishlist" element={<WishlistPage />} />
                  </Route>
                  <Route>
                    <Route path="/admin" element={<AdminDashboardPage />} />
                  </Route>
                </Routes>
              </LayoutProvider>
            </SortProvider>
          </FiltersProvider>
        </WishlistProvider>
      </SettingsProvider>
    </Router>
  );
}

export default App;
