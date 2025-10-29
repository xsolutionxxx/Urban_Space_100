import { Heart } from "lucide-react";

import product from "../assets/pot.jpg";

function ProductGorizontal() {
  return (
    <div className="p-[15px] flex gap-[15px] bg-primary rounded-2xl shadow-lg">
      <img
        src={product}
        alt="Горнятко металеве"
        className="w-1/2 h-full rounded-2xl object-cover"
      />
      <div className="w-1/2 gap-[15px]">
        <span className="text-text-sub">ФЯТБ, Горнятко</span>
        <h2 className="mb-2 font-bold text-lg">
          Горнятко металеве “Ліжник” біле
        </h2>
        <p className="mb-2.5">
          Як поєднати теплий карпатський ліжник, теплий карпатський чай і теплі
          спогади, які залишаються після мандрівки Франківщиною? Металеве
          горнятко з ліжником точно справиться з такою місією!
        </p>
        <span className="block mb-4 font-bold text-xl">500,00 ₴</span>
        <button className="flex items-end gap-1 font-medium text-sm cursor-pointer">
          <span className="underline">Додати до бажаного</span>
          <Heart strokeWidth={1.5} size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProductGorizontal;
