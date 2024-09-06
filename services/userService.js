import User from '../models/User.js';

export const createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

export const getUsers = async () => {
    return await User.find();
};

export const getUserById = async (userId) => {
    return await User.findOne({ userId });
};

export const updateUserById = async (userId, userData) => {
    return await User.findOneAndUpdate({ userId }, userData, { new: true, runValidators: true });
};

export const deleteUserById = async (userId) => {
    return await User.findOneAndDelete({ userId });
};
