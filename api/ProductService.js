import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');

export const listProducts = async (userData) => {
    try {
        const products = await (await fetch('https://fakestoreapi.com/products')).json()
        return products;
    } catch (e) {
        console.error(e);
        return [];
    }
    
}