import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHttp } from "@hooks/useHttp";
import { UrbanService } from "@service/UrbanService";
import Spinner from "@components/spinner/Spinner";

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const { request, process } = useHttp(); 

    useEffect(() => {
        UrbanService.getAllProducts(request).then(setProducts);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Видалити цей товар?")) {
            UrbanService.deleteProduct(request, id)
                .then(() => {
                    setProducts(products.filter(p => p.id !== id));
                });
        }
    };

    if (process === 'loading' && products.length === 0) return <Spinner />;

    return (
        <div className="p-10">
            <div className="flex justify-between mb-5">
                <h1 className="text-2xl font-bold">Адмін панель</h1>
                <Link to="/admin/create" className="bg-green-500 text-white px-4 py-2 rounded">
                    + Додати товар
                </Link>
            </div>

            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="p-2">ID</th>
                        <th className="p-2">Назва</th>
                        <th className="p-2">Ціна</th>
                        <th className="p-2">Дії</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="p-2">{product.id}</td>
                            <td className="p-2">{product.title}</td>
                            <td className="p-2">{product.price} грн</td>
                            <td className="p-2 flex gap-2">
                                <Link to={`/admin/edit/${product.id}`} className="text-blue-500">
                                    Edit
                                </Link>
                                <button 
                                    onClick={() => handleDelete(product.id)} 
                                    className="text-red-500"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;