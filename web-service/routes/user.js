const router = require('express').Router()
const User = require('../models/user');

// Listado de usuarios
router.get('/:userId', function(req, res) {
    User.find({}, function(err, users) {
      var userMap = {};
  
      users.forEach(function(user) {
        userMap[user.id] = user;
      });
  
      res.send(userMap);  
    });
  });

// Crear usuario
router.post('/', (req, res) => {
    let body = req.body;

    let user = new User({
        username: body.name,
    });

    user.save((err, userDB) => {
        if(err){
            return res.status(400).json({
               ok: false,
               err  
            });
        }

        res.json({
            ok: true,
            usuario: userDB
        });
    });
});

// Actualizar usuario
router.put('/:userId', (req, res) => {
    let id = req.params.id;

    User.findByIdAndUpdate(id, {new: true, runValidators: true}, (err, userBD) => {
        if(err){
            return res.status(400).json({
               ok: false,
               err  
            });
        }

        res.json({
            ok: true,
            usuario: userBD
        });
    });
});

// Eliminar usuario
router.delete('/:userId', (req, res) => {
    const { username } = req.params;
    db.collection('username').findOneAndDelete({username: username}, 
    (err, result) => {
    if (err) return res.send(500, err)
    console.log('got deleted');
    res.redirect('/');
    });
});

module.exports = router

const response = {
    statusCode: 200,
    message: 'Accepted',
    data: {}
}