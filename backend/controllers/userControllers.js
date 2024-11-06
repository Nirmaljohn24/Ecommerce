import asyncHandler from "../middleware/asyncHandler.js";
import User from "../Model/userModel.js"

// @description Auth User (Logged User)
//Route POST /api/users/login
//@access Public

const authUser = asyncHandler(async (req, res) => {
    res.send("Auth send")
});

// @description Register User 
//Route POST /api/users/register
//@access Public

const registerUser = asyncHandler(async (req, res) => {
    res.send("Register send")
});

// @description LogOut User 
//Route POST /api/users/logout
//@access Private

const logoutUser = asyncHandler(async (req, res) => {
    res.send("Logout user")
});

// @description  GET Profile User 
//Route GET /api/users/profile
//@access Public

const getUserProfile = asyncHandler(async (req, res) => {
    res.send("get User Profile")
});

// @description  Update Profile User 
//Route PUT /api/users/profile
//@access Private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.send("Update User Profile")
});

// @description GET User 
//Route GET /api/users
//@access Private/admin

const getUsers = asyncHandler(async (req, res) => {
    res.send("Get  all User")
});

// @description GET User by id
//Route GET /api/users/:_id
//@access Private/admin

const getUserById = asyncHandler(async (req, res) => {
    res.send("Get users by Id")
});

// @description DELETE User 
//Route POST /api/users/:_id
//@access Private/admin

const deleteUser = asyncHandler(async (req, res) => {
    res.send("Delete User")
});

// @description UPDATE User 
//Route PUT /api/users/:_id
//@access Private/admin

const updateUser = asyncHandler(async (req, res) => {
    res.send("Update Users")
});

export {
    authUser,
    registerUser,
    getUsers,
    updateUser,
    deleteUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUserById
}



