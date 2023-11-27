const mainControllers = {
    home: (req, res) => res.send('Route for Home View'),
    contact: (req, res) => res.render('./admin/contact'),
    about: (req, res) => res.send('Route for About View'),
    faqs: (req, res) => res.send('Route for FAQs View')
}

module.exports = mainControllers;