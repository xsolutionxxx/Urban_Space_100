import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { useHttp } from "@hooks/useHttp";

import ErrorMessage from "@error/ErrorMessage";
import ProductMain from "@components/product/ProductMain";

import SetContent from "@utils/setContent";

import { UrbanService } from "@service/UrbanService";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const { request, process } = useHttp();

    useEffect(() => {
        UrbanService.getProductById(request, id)
            .then(data => setProduct(data));
    }, [id]);

    const SuccessView = () => {
        return (
            <ErrorBoundary FallbackComponent={ErrorMessage}>
                <ProductMain product={product} />
            </ErrorBoundary>
        );
    };

    return (
        <div className="h-full flex-1 flex flex-col">
            {SetContent(process, SuccessView, product)}
        </div>
    );
}

export default ProductPage;