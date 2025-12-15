import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Spinner from "../../components/spinner/Spinner";

import ProductMain from "../../components/product/ProductMain";

const API_URL = "http://localhost:5000";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/api/products/${id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Product not found");
                }
                return res.json();
            })
            .then((data) => {
                const processedProduct = {
                    ...data,
                    images: data.images.map((img) => 
                        img.startsWith("http") ? img : `${API_URL}${img}`
                    )
                };
                setProduct(processedProduct);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="flex justify-center items-center"><Spinner /></div>;
    if (error || !product) return <div className="p-10 text-center text-red-500">Товар не знайдено</div>;

    return (
        <div>
            <ProductMain product={product} />
        </div>
    );
}

export default ProductPage;