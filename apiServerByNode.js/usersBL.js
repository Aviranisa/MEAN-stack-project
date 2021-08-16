const { json } = require('express');
const { get } = require('mongoose');
const users = require('./usersModel');

exports.getAllUsersData = () =>{
    return new Promise((resolve, reject) =>{
        users.find({},(err , usersData)=>{
            if(err) {
                reject(err);
            }
            resolve(usersData);
        });
    });
};

exports.getUserById = (userId) =>{
    return new Promise((resolve, reject) => {
        users.findById(userId , function (err, data){
            if(err){
                reject(err);
            }
            resolve(data);
        });
    });
};

exports.addNewUser = (user)=>{
    return new Promise((resolve, reject) => {
        new users(user).save(err => {
            if(err){
                reject(err);
            }
            resolve("created!");
        });
    });
}

exports.updateUserData =(id,user) => {
    return new Promise(async (resolve, reject) => {
        users.findByIdAndUpdate(id, user,function(err){
            if(err){
                reject(err);
            }
            resolve("Updated!");
        });
    });
}

exports.deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
        users.findByIdAndDelete(userId, (err) => {
            if(err){
                reject(err);
            }
            resolve("deleted!")
        });
    });
}