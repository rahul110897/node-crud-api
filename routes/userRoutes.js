// routes/userRoutes.js
import express from 'express';
import { postUser, getAllUsers, getUser, putUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/users', postUser);
router.get('/users', getAllUsers);
router.get('/users/:userId', getUser);
router.put('/users/:userId', putUser);
router.delete('/users/:userId', deleteUser);

export default router;
