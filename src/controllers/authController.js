export const authControllers = {
    getLogin: (req, res) => res.render('./auth/login'),
    saveLogin: (req, res) => res.send('Route to save Login View'),
    getRegister: (req, res) => res.render('./auth/register'),
    saveRegister: (req, res) => res.send('Route to save Register View'),
    logout: (req, res) => res.send('Route for Logout View ')
}