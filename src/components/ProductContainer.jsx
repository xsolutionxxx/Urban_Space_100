import ProductVertical from "./ProductVertical";
import ProductHorizontal from "./ProductHorizontal";
import { useLayout } from "../hooks/useLayout.js";

import socks from "../assets/products/socks.jpg";
import pot from "../assets/products/pot.jpg";
import magnet from "../assets/products/magnet.jpg";

function ProductContainer() {
  const products = [
    {
      id: 1,
      image: socks,
      category: "Шкарпетки",
      brand: "ФЯТБ",
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
      brand: "ФЯТБ",
      category: "Горнятка",
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
      category: "Магніти",
      brand: "ФЯТБ",
      title: "Магніт дерев’яний “Гуцули”",
      description:
        "Етнографічна пара гуцулів, що проживає в Карпатах. Художньо оформлений сувенір, створений натхненно, яскраво й водночас автентично. Магніт прикрасить вашу кухню або стане приємним подарунком для близьких.",
      price: 350.0,
      currency: "₴",
      inStock: true,
      isFavorite: false,
    },
  ];

  const { layout } = useLayout();

  return (
    <div className={`py-[25px] px-[15px] flex-1 bg-secondary`}>
      <h3 className="mb-3 font-medium text-base text-text-sub text-center">
        Всього елментів {products.length}
      </h3>
      <div className="flex flex-col gap-y-5">
        {products.map((product) =>
          layout === "vertical" ? (
            <ProductVertical key={product.id} {...product} />
          ) : (
            <ProductHorizontal key={product.id} {...product} />
          )
        )}
      </div>
    </div>
  );
}

export default ProductContainer;
