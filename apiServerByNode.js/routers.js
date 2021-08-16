const express = require('express');
const usersBL = require('./usersBL');
const router = express.Router();

router.route('/').get(async (request , response) =>{
    let data = await usersBL.getAllUsersData();
    return response.json(data)
})

router.route('/:id').get(async (request , response) =>{
    let userId = request.params.id;
    let userData = await usersBL.getUserById(userId);
    return response.json(userData);
})

router.route('/').post(async (request , response) =>{
    let newUser = request.body
    let data = await usersBL.addNewUser(newUser);
    return response.json(data);
})

router.route('/:id').put(async (request , response) =>{
    let userId = request.params.id
    let user = request.body
    let data = await usersBL.updateUserData(userId,user)
    return response.json(data);    
})

router.route('/:id').delete(async (request , response) =>{
    let userId = request.params.id;
    let data = await usersBL.deleteUser(userId);
    return response.json(data);
})

module.exports = router;