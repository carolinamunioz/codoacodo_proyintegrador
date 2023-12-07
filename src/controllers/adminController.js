import { addNewProductToDB, getAllProductsFromDB, getProductByIdFromDB } from '../model/model.js';

// Obtiene todos los productos de la BD y renderiza la pag Admin
export const getAllProducts = async (req, res) => {
    try {
        const datos = await getAllProductsFromDB();
        res.render('./admin/admin', {data:datos});
    } catch (error) {
        console.error("Error getting all products: ", error);
        res.status(500).send('Internal Server Error');
    }
}

// Renderiza la pagina que usamos para agregar un nuevo producto
export const createItem = (req, res) => {
    res.render('./admin/createItem');
}

//Guarda en la BD el nuevo producto
export const saveNewProduct = async (req, res) => {
    const newProdData = req.body;
    try {
        const nuevoProd = await addNewProductToDB(newProdData);
        const datos = await getAllProductsFromDB();
        res.render('./admin/admin', {data:datos});
    } catch (error) {
        console.error("Error adding a new product: ", error);
        res.status(500).send('Internal Server Error');
    }
}

// Obtiene un prod por su id de la BD y renderiza la pag UpdateItem
export const getProductById = async (req, res) => {
    try {
        const prod_id = parseInt(req.params.id);
        const prod = await getProductByIdFromDB(prod_id);
        res.render('./admin/updateItem', {
            producto: prod[0]
        })
    } catch (error) {
        console.error("Error getting all products: ", error);
        res.status(500).send('Internal Server Error');
    }
}


/*
export const adminControllers = {
    saveItemById: (req, res) => res.send(`Route to save the specific item with id ${req.params.id} on the Admin view`),
    deleteItem:  (req, res) => res.send(`Route to delete the specific item with id ${req.params.id} on the Admin view`)
}
*/