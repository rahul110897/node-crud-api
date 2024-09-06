// server.js
import app from './app.js';
import connectDB from './config/db.js'; // Import the MongoDB connection module

const PORT = process.env.PORT || 3000;
// Connect to MongoDB
connectDB().then(() => {
    // Start the server after connecting to the database
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
