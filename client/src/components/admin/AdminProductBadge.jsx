import { Link } from "react-router-dom";

import ImageWithLoader from "@components/ui/ImageWithLoader";

function AdminProductBadge({ product }) {
  const rawImages = Array.isArray(product.images)
    ? product.images
    : [product.images];

  return (
    <>
      <div>{product.id}</div>
      <ImageWithLoader
        src={rawImages[0]}
        alt={product.title}
        className="hidden 2xs:block w-full h-18 object-cover rounded-md"
      />
      <div className="line-clamp-2 md:line-clamp-3">{product.title}</div>
      <div className="hidden lg:block max-h-18 text-xs overflow-auto">
        {product.description}
      </div>
      <div className="hidden sm:block line-clamp-3">{`${product.category}, ${product.brand}`}</div>
      <div>{product.price}</div>
      <div className="flex flex-col gap-2">
        <Link
          to={`/product/${product.id}`}
          className="px-2 py-1 max-w-30 bg-cta rounded-md text-white text-center cursor-pointer"
        >
          Edit
        </Link>
        <button className="px-2 py-1 max-w-30 bg-accent text-white rounded-md cursor-pointer">
          Delete
        </button>
      </div>
    </>
  );
}

export default AdminProductBadge;
