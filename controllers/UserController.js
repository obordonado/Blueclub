
const { User } = require('../models/index');

const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
let authConfig = require('../config/auth');

//UserController object declaration
const UserController = {};

UserController.getUser = (req, res) => {
    //Funcion findAll de Sequelize
    User.findAll(
        {
            attributes:{
                exclude:[`password`, `role`]
            }
        }
    )

    .then(data => {
    
        res.send(data)
    });
};

UserController.postUser = async (req, res) => {

    let name = req.body.name;
    let client_number = req.body.client_number;
    let age = req.body.age;
    let gender = req.body.gender;
    let password = bcryptjs.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
    let role = req.body.role;

    if(
        name===""||null
        ||client_number===""||null
        ||age===""||null 
        ||gender===""||null 
        ||role===""||null
        )
    {
        return res.send("Please introduce all data correctly");
    };
    
    User.create({
        name: name,
        client_number: client_number,
        age: age,
        gender:gender,        
        password: password,
        role: role
    }).then(user => {
        res.send(`${user.name}, you have been added succesfully!`);

    }).catch((error) => {
        res.send(error);
    });    
    
};

UserController.loginUser = (req, res) => {

    let documentacion = req.body.client_number;
    let clave = req.body.password;

    User.findOne({
        where : {client_number : documentacion}
        

    }).then(usuarioEncontrado => {

        if(!usuarioEncontrado){
            res.send("Incorrect User or Password");
        } else {
            if( bcryptjs.compareSync(clave, usuarioEncontrado.password)){
                //Comprueba que el usuario existe y el password corresponde a ese usuario

                let token = jwt.sign({ user: usuarioEncontrado }, authConfig.secret, {
                    expiresIn: authConfig.expires
                });
                                
                let loginOKmessage = `Welcome back ${usuarioEncontrado.name}`
                res.json({
                    loginOKmessage,
                    user: {name:usuarioEncontrado.name,
                           age:usuarioEncontrado.age
                    },
                    token: token
                })
            };
        };

    }).catch(err => console.log(err));
};


UserController.putUser = async (req, res) => {
    let identidad = req.body.id;
    let name = req.body.name;
    
    User.findOne({
        where:{id:identidad}
    })
   .then(user => {
    if(!user){
        res.send(`User not found!`)
    }else{
        user.update({
            name: name,
    });
        res.send(user);

    }
    }).catch((error) => {
        res.send(error);
    });  
};
//Export
module.exports = UserController;
