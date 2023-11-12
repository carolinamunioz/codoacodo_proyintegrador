const adminControllers = {
    home: (req, res) => res.send('Route for Admin View '),
    createItem:(req, res) => res.send('Route to create an Admin view') ,
    saveItem: (req, res) => res.send('Route to save Admin View'),
    itemById: (req, res) => res.send(`Route to get the specif item with id ${req.params.id} on the Admin view`),
    saveItemById: (req, res) => res.send(`Route to save the specif item with id ${req.params.id} on the Admin view`),
    deleteItem:  (req, res) => res.send(`Route to delete the specif item with id ${req.params.id} on the Admin view`)
}

module.exports = adminControllers;