import pool from '../config/database.js';

//Obtener todos los productos de la base de datos
export const getAllProductsFromDB = async () => {
    try {
        const [datos] = await pool.query('SELECT * FROM products')
        return datos
    }
    catch (error) {
        console.error('Error querying MySQL: ', error);
        throw error;
    }
}

//Obtener un producto utilizando como filtro el product id
export const getProductByIdFromDB = async (id) => {
    try {
        const [datos] = await pool.query('SELECT * FROM products WHERE product_id = ?', [id])
        return datos
    }
    catch (error) {
        console.error('Error querying MySQL: ', error);
        throw error;
    }
}

//Agregar un nuevo producto a la base de datos
export const addNewProductToDB = async (prodData) => {
    try {
        const [result] = await pool.query('INSERT INTO products SET ?', [prodData]);
        const nuevoProdID = result.insertId;
        const nuevoProd = await getProductByIdFromDB(nuevoProdID);
        return nuevoProd;
    } catch (error) {
        console.error('Error inserting into MySQL:', error);
        throw error;
    }
};

//Actualizar un producto existente en la base de datos con nuevos datos
export const editProductInDB = async (id, newProdData) => {
    try {
        await pool.query('UPDATE products SET ? WHERE id = ?', [newProdData, id]);
        const updatedProd = await getProductByIdFromDB(id);
        return updatedProd;
    } catch (error) {
        console.error('Error updating MySQL:', error);
        throw error;
    }
};

// Borrar un producto por ID de la base de datos
export const deleteProdFromDB = async (prodId) => {
    try {
        const deletedProd = await getProductByIdFromDB(prodId);
        await pool.query('DELETE FROM products WHERE product_id = ?', [prodId]);
        return deletedProd;
    } catch (error) {
        console.error('Error deleting from MySQL:', error);
        throw error;
    }
};