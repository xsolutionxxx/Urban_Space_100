import { useState } from "react";
import { Heart } from "lucide-react";

function ProductHorizontal({
  image,
  brand,
  category,
  title,
  description,
  price,
  currency,
}) {
  const [openDescription, setOpenDescription] = useState(false);

  return (
    <div className="p-[15px] flex gap-[15px] bg-primary rounded-2xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-1/2 h-[180px] rounded-2xl object-cover"
      />
      <div className="w-1/2 gap-[15px]">
        <span className="text-text-sub">
          {brand}, {category}
        </span>
        <h2 className="mb-3 font-bold text-lg">{title}</h2>
        <button
          onClick={() => setOpenDescription(!openDescription)}
          className="mb-2 font-medium underline"
        >
          {openDescription ? "Розгорнути опис" : "Згорнути опис"}
        </button>
        {openDescription ? <p className="mb-2.5">{description}</p> : null}
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">
            {price} {currency}
          </span>
          <button className="flex justify-start items-center gap-1 font-medium text-sm cursor-pointer">
            <Heart strokeWidth={1.5} size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductHorizontal;
