// controllers/userController.js
import { createUser, getUsers, getUserById, updateUserById, deleteUserById } from '../services/userService.js';
import Response from '../utils/response.js';
import { MESSAGES } from '../utils/messages.js';

export const postUser = async (req, res, next) => {
    try {
        const user = await createUser(req.body);
        Response.success(res, 201, MESSAGES.USER_CREATED_SUCCESS, user);
    } catch (err) {
        next(err); // Pass error to the error-handling middleware
    }
};

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await getUsers();
        Response.success(res, 200, MESSAGES.USERS_RETRIEVED_SUCCESS, users);
    } catch (err) {
        next(err);
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await getUserById(req.params.id);
        if (!user) return Response.error(res, 404, MESSAGES.USER_NOT_FOUND);
        Response.success(res, 200, MESSAGES.USER_RETRIEVED_SUCCESS, user);
    } catch (err) {
        next(err);
    }
};

export const putUser = async (req, res, next) => {
    try {
        const user = await updateUserById(req.params.id, req.body);
        if (!user) return Response.error(res, 404, MESSAGES.USER_NOT_FOUND);
        Response.success(res, 200, MESSAGES.USER_UPDATED_SUCCESS, user);
    } catch (err) {
        next(err);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const user = await deleteUserById(req.params.id);
        if (!user) return Response.error(res, 404, MESSAGES.USER_NOT_FOUND);
        Response.success(res, 200, MESSAGES.USER_DELETED_SUCCESS, user);
    } catch (err) {
        next(err);
    }
};
