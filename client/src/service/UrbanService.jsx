const UrbanService = () => {
    const _API_BASE = 'http://localhost:5000/api';
    const _SERVER_BASE = 'http://localhost:5000';

    const getResource = async (url) => {
        try {
            const res = await fetch(url);

            if (!res.ok) {
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }

            const contentType = res.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new TypeError("Отримано не JSON! Перевірте адресу сервера.");
            }

            return await res.json();
        } catch (error) {
            console.error("Fetch error details:", error);
            throw error;
        }
    }

    const getAllProducts = async () => {
        const products = await getResource(`${_API_BASE}/products`);

        return _transformAll(products)
    }

    const getProductById = async (id) => {
        const products = await getResource(`${_API_BASE}/products/${id}`);

        return _transformProduct(products);
    }

    const _transformAll = (data) => {
        if (!Array.isArray(data)) return [];
        
        return data.map(item => _transformProduct(item));    
    };

    const _transformProduct = (data) => {
        return {
            ...data,
            images: data.images ? data.images.map((img) => 
                img.startsWith("http") ? img : `${_SERVER_BASE}${img}`
            ) : []
        };    
    };

    return { getAllProducts, getProductById };
}

export default UrbanService;
