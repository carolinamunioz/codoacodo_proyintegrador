//const datosCarrito = require ('../model/datosCarrito');

const datosCarrito = [
    {
        product_id: 1,
        licence_name: "STAR WARS",
        category_name: "Figuras coleccionables",
        product_name: "BABY YODA BLUEBALL",
        product_description: "Figura coleccionable Start Wars",
        product_price: 1799.99,
        dues: 10,
        units_in_cart:2,
        product_sku: "STW001001",
        img_front: "../../img/star-wars/baby-yoda-1.webp",
        img_back: "../../img/star-wars/baby-yoda-box.webp"
    },
    {
        product_id: 5,
        licence_name: "POKEMON",
        category_name: "Figuras coleccionables",
        product_name: "PIDGEOTTO",
        product_description: "Figura coleccionable Pokemon",
        product_price: 1799.99,
        dues: 8,
        units_in_cart:1,
        product_sku: "PKM001001",
        img_front: "../../img/pokemon/pidgeotto-1.webp",
        img_back: "../../img/pokemon/pidgeotto-box.webp"
    },
    {
        product_id: 6,
        licence_name: "HARRY POTTER",
        category_name: "Figuras coleccionables",
        product_name: "LUNA LOVEWOOD",
        product_description: "Figura coleccionable Harry Potter",
        product_price: 1799.99,
        dues: 8,
        units_in_cart:1,
        product_sku: "PKM001001",
        img_front: "../../img/harry-potter/luna-1.webp",
        img_back: "../../img/harry-potter/luna-box.webp",
        product_promo: "3 CUOTAS SIN INTERÉS"
    }
];

const shopControllers = {
    home: (req, res) => res.render('./shop/shop', {data:datosCarrito}),
    getItemId: (req, res) => res.send(`Route to find and retrieve a product from the id: ${req.params.id}`),
    addItemId: (req, res) => res.send('Route to add the current item to the shop cart'),
    cart: (req, res) => res.render('./shop/cart', {data:datosCarrito}),
    addCart: (req, res) => res.send('Route for Go to Checkout page ')
}

module.exports = shopControllers;