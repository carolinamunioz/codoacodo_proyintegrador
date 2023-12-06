const datosAdmin = [
    {
        product_id: 1,
        licence_name: "STAR WARS",
        product_name: "Baby Yoda Blueball",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "STW001001",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/baby-yoda-1.webp',
        img_back: '../../img/pokemon/baby-yoda-box.webp'
    },
    {
        product_id: 2,
        licence_name: "STAR WARS",
        product_name: "Boba Fett Fighter",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "STW001002",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 3,
        licence_name: "STAR WARS",
        product_name: "Luke Skylwalker & Grogu",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "STW001003",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 4,
        licence_name: "STAR WARS",
        product_name: "Stormtrooper Lightsaber",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "STW001004",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 5,
        licence_name: "POKEMON",
        product_name: "Charmander Smiley",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "PKM001001",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 6,
        licence_name: "POKEMON",
        product_name: "Dragonite Hi!",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        product_sku: "PKM001002",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 7,
        licence_name: "POKEMON",
        product_name: "Pidgeotto Flying",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "PKM001003",
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 8,
        licence_name: "POKEMON",
        product_name: "Pikachu Smiley",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "PKM001004",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 9,
        licence_name: "POKEMON",
        product_name: "Vulpix Fancy",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "PKM001005",
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 10,
        licence_name: "HARRY POTTER",
        product_name: "Harry Potter & Hegwid",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "HPT001001",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 11,
        licence_name: "HARRY POTTER",
        product_name: "Herminione Ball Dress",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "HPT001002",
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },
    {
        product_id: 12,
        licence_name: "HARRY POTTER",
        product_name: "Luna Lovegood Lion Mask",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "HPT001003",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    },    
    {
        product_id: 13,
        licence_name: "HARRY POTTER",
        product_name: "Snape Patronus",
        product_description: "Figura colleccionable",
        product_price: 1799.99,
        dues: 5,
        product_sku: "HPT001004",
        category_name: 'Figuras coleccionables',
        img_front: '../../img/pokemon/pidgeotto-1.webp',
        img_back: '../../img/pokemon/pidgeotto-box.webp'
    }
]

//import datosAdmin from "../model/datosAdmin"

const adminControllers = {
    home: (req, res) => res.render('./admin/admin', {data:datosAdmin}),
    createItem:(req, res) => res.render('./admin/createItem'),
    saveItem: (req, res) => res.send('Route to save Admin View'),
    itemById: (req, res) => {
        const prod = datosAdmin.find(function(prod) {
            return prod.product_id === parseInt(req.params.id)
        })
        if (!prod) {
            return res.status(404).send(`Usuario no encontrado con id ${req.params.id}`)
        }
        res.render('./admin/updateItem', {
            producto: prod
        })
    },
    saveItemById: (req, res) => res.send(`Route to save the specific item with id ${req.params.id} on the Admin view`),
    deleteItem:  (req, res) => res.send(`Route to delete the specific item with id ${req.params.id} on the Admin view`)
}

module.exports = adminControllers;