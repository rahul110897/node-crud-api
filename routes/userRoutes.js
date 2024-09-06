// routes/userRoutes.js
import express from 'express';
import { postUser, getAllUsers, getUser, putUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', postUser);
router.get('/users', getAllUsers);
router.get('/users/:id', getUser);
router.put('/users/:id', putUser);
router.delete('/users/:id', deleteUser);

export default router;
