import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CatalogPage from "@pages/catalog/CatalogPage";
import WishlistPage from "@pages/wishlist/WishlistPage";
import ProductPage from "@pages/product/ProductPage";
import AdminDashboardPage from "@pages/admin/AdminDashboardPage";

import MainLayout from "@components/layout/MainLayout";

import { WishlistProvider } from "@features/wishlist/WishlistProvider";
import { SortProvider } from "@features/sort/SortProvider";
import { FiltersProvider } from "@features/filters/FiltersProvider";
import { LayoutProvider } from "@features/layout/LayoutProvider";

/* import socks from "@assets/products/socks.jpg";
import pot1 from "@assets/products/pot_1.jpg";
import pot2 from "@assets/products/pot_2.jpg";
import pot3 from "@assets/products/pot_3.jpg";
import magnet from "@assets/products/magnet.jpg";
import icon from "@assets/products/icon.jpg";
import poster from "@assets/products/poster.jpg";
import lollipop from "@assets/products/lollipop.jpg";
import dodosocks from "@assets/products/dodosocks.jpg"; */

function App() {
  /* const products = [
    {
      id: 1,
      images: [socks],
      category: "Шкарпетки",
      brand: "ФЯТБ",
      title: "Шкарпетки теплі “Ліжник” сірий",
      description:
        "Теплі, дуже м’які й приємні до ноги шкарпетки. А від дизайну, що візуально наслідує гуцульський ліжник, зігріє ще більше!",
      price: 190.0,
    },
    {
      id: 2,
      images: [pot1, pot2, pot3],
      brand: "ФЯТБ",
      category: "Горнятка",
      title: "Горнятко металеве “Ліжник” білий",
      description:
        "На принті нашого металевого горнятка — теплий карпатський ліжник! Стильний дизайн, натхненний після краси Карпатських гір! Металеве горнятко з ліжником створене з любов’ю і тільки м’якістю.",
      price: 500.0,
    },
    {
      id: 3,
      images: [magnet],
      category: "Магніти",
      brand: "ФЯТБ",
      title: `Магніт дерев’яний "Гуцули"`,
      description:
        "Етнографічна пара гуцулів, що проживає в Карпатах. Художньо оформлений сувенір, створений натхненно, яскраво й водночас автентично. Магніт прикрасить вашу кухню або стане приємним подарунком для близьких.",
      price: 350.0,
    },
    {
      id: 4,
      images: [icon],
      category: "Значки",
      brand: "ICON",
      title: `Значок «Прибулець»`,
      description:
        "Дерев'яний значок - це чудове доповнення до твого образу або ідеальний подарунок для дітей та дорослих. Стильно виглядає на одязі, сумках та рюкзаках. Виготовлений з екологічних матеріалів. Малюнок з УФ покриттям додатково вкритий матовим лаком, не вигорає і не стирається з часом.",
      price: 120.0,
    },
    {
      id: 5,
      images: [poster],
      category: "Постери",
      brand: "ICON",
      title: `Постер "The Mandalorian. Season 1"`,
      description:
        "Постер - це ідеальне рішення для оновлення вашого простору або чудовий подарунок для дітей та дорослих. Стильно виглядає в будь-якому інтер'єрі. Виготовлений з екологічних матеріалів. Принт на спеціальному папері не вигорає і не стирається з часом.",
      price: 250.0,
    },
    {
      id: 6,
      images: [lollipop],
      category: "Льодяники",
      brand: "Jeremy",
      title: "Льодяник зі смаком полуниці без цукру, 10 г",
      description: `Льодяники від бренду "Jeremy" не містять цукру, замість нього використовується ізомальт, який забезпечує рівномірне постачання енергії в організм, уникнувши різких стрибків рівня глюкози в крові. До речі, ізомальт не спричиняє карієс! Має природний смак і колір фруктового соку; Містить природні смакові добавки; Солодкий смак природного походження; У кожному льодянику лише 20 калорій.`,
      price: 50.0,
    },
    {
      id: 7,
      images: [dodosocks],
      category: "Шкарпетки",
      brand: "Dodo Socks",
      title: "Теплий набір Шурхіт",
      description:
        "Їжаки неквапливо дріботять стежками, залишаючи за собою тихе «шшш» у килимі з опалого листя. Гриби стоять мовчки, але навколо них — шелест, хрускіт, ледь чутне «цок-цок» крапель із гілок. Повітря наповнене звуками тиші: десь далеко трісне суха гілка, ближче дихає земля. Ці шкарпетки — як прогулянка, де кожен крок звучить затишком, а фініш пахне чаєм і хвоєю.",
      price: 360.0,
    },
  ]; */

  return (
    <Router basename="/Urban_Space_100/">
      <WishlistProvider>
        <FiltersProvider>
          <SortProvider>
            <LayoutProvider>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<CatalogPage />} />
                  <Route path="/wishlist" element={<WishlistPage />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                  <Route path="/admin" element={<AdminDashboardPage />} />
                </Route>
              </Routes>
            </LayoutProvider>
          </SortProvider>
        </FiltersProvider>
      </WishlistProvider>
    </Router>
  );
}

export default App;
