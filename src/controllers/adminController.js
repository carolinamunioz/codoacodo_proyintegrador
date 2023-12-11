import { addNewProductToDB, getAllProductsFromDB, getProductByIdFromDB, editProductInDB, deleteProdFromDB } from '../model/model.js';

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

// Renderiza la pagina que usamos para crear un nuevo producto
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
        console.error("Error getting product: ", error);
        res.status(500).send('Internal Server Error');
    }
}

//Guarda los cambios en la BD de un producto existente
export const updateProduct = async (req, res) => {
    const newProdData = req.body;
    const prod_id = parseInt(req.params.id);
    try {
        const nuevoProd = await editProductInDB(prod_id,newProdData);
        const datos = await getAllProductsFromDB();
        res.render('./admin/admin', {data:datos});
    } catch (error) {
        console.error("Error saving changes to product: ", error);
        res.status(500).send('Internal Server Error');
    }
}

//Eliminar un producto de la BD
export const deleteProduct = async (req, res) => {
    const prod_id = parseInt(req.params.id);
    try {
        const deleteProd = await deleteProdFromDB(prod_id);
        if (deleteProd) {
            const datos = await getAllProductsFromDB();
            res.render('./admin/admin', {data:datos});
        } else {
            res.status(404).send('usuario not found');
        }
    } catch (error) {
        console.error("Error deleting product: ", error);
        res.status(500).send('Internal Server Error');
    }
}



//A partir de aca, session validator

// LOGIN
export const loginPOST = async (req, res) => {

    console.log("ENVIANDO INFO A LOGIN")
    /* const password = req.body.password
    const usuario = req.body.usuario */
    const { usuario, password } = req.body

    const userData = await getUserByUsernameFromDB(usuario)
    // userData ---> { usuario: "Admin", password: "12345"}

    // si obtuvo algo de la base de datos
    if (userData && userData.password == password) {
      
        req.session.esAdmin = true
        req.session.usuario = usuario
        console.log("REQ SESSION ---> ",req.session)
        res.redirect("/admin")
    } else {
        res.render('login', {
            mensaje: "Nombre de usuario o contraseña incorrecta",
            error: true
        });
    }
}

// READ 
export const getAllUsuarios = async (req, res) => {
    try {
        const datos = await getAllUsuariosFromDB() 
        res.render("adminUsuarios", {
            usuario: req.session.usuario,
            data: datos,
            mensaje: req.query.mensaje || ""
        })
    } catch (error) {
        console.error('Error getting usuarios:', error);
        res.status(500).send('Internal Server Error');
    }
} 

// Agregar usuario - VISTA
export const addUsuario = async (req, res) => {
    try {
        res.render("adminCrear", {
            titulo: "Crear usuario",
            huboError: false,
            errores: []
        })
    } catch (error) {
        console.error('Error adding usuario:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Agregar usuario - POST (CREATE)
export const addUsuarioPOST = async (req, res) => {

    console.log("req.file -->", req.file) // Obtener los datos del ARCHIVO subido
    console.log("req.body -->", req.body) // Obtener los datos de TEXTO del formulario

    const newUsuarioData = req.body;
    newUsuarioData.imagen = req.file.filename

    try {

        // Validación
        const errores = validationResult(req)
        console.log("ERRORES -->", errores)

        if (!errores.isEmpty()) {
            return res.render("adminCrear", {
                titulo: "Crear Usuario - Hubo errores",
                huboError: true,
                errores: errores.errors, // mensajes de error en array
            })

        }

        await addUsuarioFromDB(newUsuarioData);
        res.redirect("/admin/login" + "?mensaje=Usuario agregado")
    } catch (error) {
        console.error('Error adding Usuario:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Editar usuario - VISTA
export const editUsuario = async (req, res) => {
    const usuarioID = req.params.id;

    try {
        const usuario = await getUsuarioPorIDFromDB(usuarioID);
        if (usuario) {
            // res.status(200).json(usuario);
            res.render("adminActualizar", {
                data: usuario
            })
        } else {
            res.status(404).send('Usuario not found');
        }
    } catch (error) {
        console.error('Error getting usuario by ID:', error);
        res.status(500).send('Internal Server Error');
    }
}

// Editar usuario - POST (UPDATE)
export const editUsuarioPOST = async (req, res) => {
    const usuarioID = req.params.id;
    const updatedUsuarioData = req.body;
    updatedUsuarioData.imagen = req.file.filename;

    try {

        // Poner chequeo validacion

        const updatedUsuario = await editUsuarioPostFromDB(usuarioID, updatedUsuarioData);
        if (updatedUsuario) {
            // res.status(200).json(updatedUsuario);
            res.redirect("/admin" + "?mensaje=Usuario actualizado")
        } else {
            res.status(404).send('Usuario not found');
        }
    } catch (error) {
        console.error('Error editing Usuario:', error);
        res.status(500).send('Internal Server Error')
    }
}

export const deleteUsuario = async (req, res) => {
    const usuarioID = req.params.id;
    try {
        
        const deletedUsuario = await deleteUsuarioFromDB(usuarioID);

        if (deletedUsuario) {

            unlink('public/uploads/' + deletedUsuario.imagen, (err) => {
                if (err) res.send(`Ocurrió un error ${err.code}`);
                console.log('Usuario borrado');
            }); 
            // res.status(200).json(deletedUsuario);
            res.redirect("/admin" + "?mensaje=Usuario Borrado")
        } else {
            res.status(404).send('usuario not found');
        }
    } catch (error) {
        console.error('Error deleting usuario:', error);
        res.status(500).send('Internal Server Error');
    }
}