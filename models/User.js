import mongoose from 'mongoose';
import mongooseSequence from 'mongoose-sequence'; // Import the plugin using ES modules
// Initialize the plugin
const AutoIncrement = mongooseSequence(mongoose);

const UserSchema = new mongoose.Schema({
    userId: {
        type: Number, // Custom auto-incrementing ID
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    }
},);

// Apply the auto-increment plugin to the userId field
UserSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const User = mongoose.model('User', UserSchema);
export default User;
