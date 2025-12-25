const _API_BASE = 'http://localhost:5000/api';
const _SERVER_BASE = 'http://localhost:5000';

const _transformProduct = (data) => {
    return {
        ...data,
        images: data.images ? data.images.map((img) => 
            img.startsWith("http") ? img : `${_SERVER_BASE}${img}`
        ) : []
    };    
};

const _transformAll = (data) => {
    if (!Array.isArray(data)) return [];
    return data.map(item => _transformProduct(item));    
};

export const UrbanService = {
    getAllProducts: async (request) => {
        const res = await request(`${_API_BASE}/products`);
        return _transformAll(res);
    },

    getProductById: async (request, id) => {
        const res = await request(`${_API_BASE}/products/${id}`);
        return _transformProduct(res);
    }
};