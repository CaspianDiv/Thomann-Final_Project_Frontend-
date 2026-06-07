import thommanInstance from "../api/axiosInstance";

async function request(endpoint) {
    try {
        const res = await thommanInstance.get(`/${endpoint}`);
        return res.data
    } catch (error) {
        console.error( error.message || "An error occurred during the fetch operation.");
    }
};



async function postNewProduct(newProduct) {
    try {
        const res = await thommanInstance.post(`/products/` , newProduct)
        return res.data
    } catch (error) {
        console.error(error.message || "An error created post new product !");
    }
};

async function editProductById(id , product) {
    try {
        const res = await thommanInstance.patch(`/products/${id}` , product)
        return res.data
    } catch (error) {
        console.error(error.message || "An error created post new product !");
    }
};

async function deleteProductById(id) {
    try {
        const res = await thommanInstance.delete(`/products/${id}`)
        return res.data
    } catch (error) {
        console.error(error.message || "An error created post new product !");
    }
};



const getAllProducts = () => request("products");
const getFlagsThomman = () => request("flags");
const getSLiderThomman = () => request("slider");
const getOwnSliderThomman = () => request("ownWordSlider");
const getNewsCardsThomman = () => request("news_letter");
const getCountriesThomman = () => request("countries");

export {
    getAllProducts,
    getFlagsThomman,
    getSLiderThomman,
    getOwnSliderThomman,
    getNewsCardsThomman,
    postNewProduct,
    editProductById,
    deleteProductById,
    getCountriesThomman
}