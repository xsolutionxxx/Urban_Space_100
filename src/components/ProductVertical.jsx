import { Heart } from "lucide-react";

import product from "../assets/socks.jpg";

function ProductVertical() {
  return (
    <div className="p-[15px] bg-primary rounded-2xl shadow-lg">
      <img
        src={product}
        alt="Горнятко металеве"
        className="w-full h-[220px] mb-3 rounded-2xl object-cover"
      />
      <span className="text-text-sub">ФЯТБ, Шкарпетки</span>
      <h2 className="mb-2 font-bold text-lg">Шкарпетки теплі “Ліжник” сірий</h2>
      <p className="mb-2">
        Теплі, дуже м’якенькі і приємні до ноги шкарпетки. А від думки, що на
        них намальованих гуцульський ліжник зігріває ще більше!
      </p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">500,00 ₴</span>
        <button className="flex items-end gap-1 font-medium text-sm cursor-pointer">
          <span className="underline">Додати до бажаного</span>
          <Heart strokeWidth={1.5} size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProductVertical;
