const { Router } = require('express')
const { check } = require('express-validator')

const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt')

const { login, googleSignIn } = require('../controllers/auth')
//const router = require('./usuarios')

const router = Router()

router.post('/login',[
    validarJWT,
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login )

router.post('/google',[
    check('id_token', 'El token de Google es necesario').not().isEmpty(),
    validarCampos
],googleSignIn )

module.exports = router