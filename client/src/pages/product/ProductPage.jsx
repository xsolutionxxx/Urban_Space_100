import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import Spinner from "@components/spinner/Spinner";
import ErrorMessage from "@error/ErrorMessage";

import ProductMain from "@components/product/ProductMain";

import UrbanService from "@service/UrbanService";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { getProductById } = UrbanService();

    useEffect(() => {
        setLoading(true);
        getProductById(id).then(processedProduct => {
            setProduct(processedProduct);
            setLoading(false);
        }).catch(err => {
            console.error(err);
            setError(err.message);
        });
    }, [id]);

    if (loading) return <div className="flex-1 flex justify-center items-center"><Spinner /></div>;
    if (error || !product) return <div className="p-10 text-center text-red-500">Товар не знайдено</div>;

    return (
        <div>
            <ErrorBoundary FallbackComponent={<ErrorBoundary />}>
                <ProductMain product={product} />
            </ErrorBoundary>
        </div>
    );
}

export default ProductPage;