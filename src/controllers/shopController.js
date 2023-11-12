const shopControllers = {
    home: (req, res) => res.send('Route for Shop View '),
    getItemId: (req, res) => res.send(`Route to find and retrieve a product from the id: ${req.params.id}`),
    addItemId: (req, res) => res.send('Route to add the current item to the shop cart'),
    cart: (req, res) => res.send('Route for Cart View '),
    addCart: (req, res) => res.send('Route for Go to Checkout page ')
}

module.exports = shopControllers;