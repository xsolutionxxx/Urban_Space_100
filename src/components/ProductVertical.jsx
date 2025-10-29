import { Heart } from "lucide-react";

function ProductVertical({
  image,
  brand,
  category,
  title,
  description,
  price,
  currency,
}) {
  return (
    <div className="p-[15px] bg-primary rounded-2xl shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-[260px] mb-3 rounded-2xl object-cover"
      />
      <span className="text-text-sub">
        {brand}, {category}
      </span>
      <h2 className="mb-2 font-bold text-lg">{title}</h2>
      <p className="mb-2">{description}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-xl">
          {price} {currency}
        </span>
        <button className="flex items-end gap-1 font-medium text-sm cursor-pointer">
          <span className="underline">Додати до бажаного</span>
          <Heart strokeWidth={1.5} size={24} />
        </button>
      </div>
    </div>
  );
}

export default ProductVertical;
