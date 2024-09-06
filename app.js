// app.js
import express from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use('/api', userRoutes);

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong', error: err.message });
});

export default app;
