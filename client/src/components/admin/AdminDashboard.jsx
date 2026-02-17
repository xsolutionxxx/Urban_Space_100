import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "@hooks/useHttp";
import { UrbanService } from "@service/UrbanService";
import Spinner from "@components/spinner/Spinner";
import AdminStatsCard from "./AdminStatsCard";
import AdminCard from "./AdminCard";
import AdminProductsList from "./AdminProductsList";
import AdminProductBadge from "./AdminProductBadge";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const { request, process } = useHttp();

  useEffect(() => {
    UrbanService.getAllProducts(request).then(setProducts);
  }, []);

  if (process === "loading" && products.length === 0) return <Spinner />;

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <AdminStatsCard
          title="Total Products"
          value={products.length}
          icon="📦"
          trend="+12%"
        />
        <AdminStatsCard title="Visits" value="2.1k" icon="👁️" trend="+8.31%" />
      </div>

      <AdminCard name="Products">
        <div className="mb-4 w-full flex justify-between items-center gap-5">
          <input
            type="text"
            className="px-2 py-1 w-34 2xs:w-60 border border-gray-300 rounded-md"
            placeholder="Search products by ID or title..."
          />
          <Link
            to={`/admin/add`}
            className="px-2 py-1 w-30 3xs:w-max bg-green-600 rounded-md text-white text-center capitalize cursor-pointer"
          >
            add new product
          </Link>
        </div>
        <AdminProductsList>
          {products.map((product) => (
            <AdminProductBadge key={product.id} product={product} />
          ))}
        </AdminProductsList>
      </AdminCard>
      <AdminCard name="Categories & Brands"></AdminCard>
    </div>
  );
};

export default AdminDashboard;
