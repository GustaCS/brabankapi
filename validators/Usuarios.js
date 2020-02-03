const {check,body } = require('express-validator')
const usuarioDao = require('../model/Usuarios')

class Usuarios{
   static validacoes(){
        return[
                check('nome').isLength({min: 5, max: 100}).withMessage('Campo nome deve ter no minimo 5 caracteres e no maximo 100!'),
                check('email').isEmail().withMessage('Deve ser um email valido'),
                check('cpf').isNumeric().withMessage('Campo cpf deve ser apenas numero'),
                check ('sexo').isLength({min:1, max:1}).withMessage('Deve ser apenas um carater (M ou F)'),
                check('senha').isLength({min:6, max:15}).withMessage('A senha deve ter entre 6 a 15 caracteres'),
                body('email').custom(email=>{
                    usuarioDao.buscarPorEmail(email)
                    .then(retorno =>{
                        if(retorno)
                        return Promise.reject('E-mail ja cadastradado')
                    })
                })
            ]

        
    }
}

module.exports = Usuarios