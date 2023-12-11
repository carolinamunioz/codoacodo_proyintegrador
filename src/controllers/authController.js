import {getUserByUsernameFromDB} from '../model/model.js'

export const authControllers = {
    getLogin: (req, res) => res.render('./auth/login'),
    getRegister: (req, res) => res.render('./auth/register'),
    saveRegister: (req, res) => res.send('Route to save Register View'),
    logout: (req, res) => res.render('./auth/logout')
}

export const loginPOST = async (req, res) => {

    console.log("ENVIANDO INFO A LOGIN")
    const { email, password } = req.body

    const userData = await getUserByUsernameFromDB(email)
    
    // si obtuvo algo de la base de datos
    if (!userData) {
        if (userData && userData[0].password == password) {
            req.session.esAdmin = true
            req.session.usuario = userData[0].name
            console.log("REQ SESSION ---> ",req.session)
            res.redirect("/admin")
        }
    } 
     else {
            res.render('./auth/login', {
                mensaje: "Nombre de usuario o contraseña incorrecta",
                error: true
            });
    }
}