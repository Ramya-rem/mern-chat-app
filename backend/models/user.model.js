import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,//every user has unique username
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        gender: {
            type: String,
            required: true,
            enum: ["male", "female"],//we use enum field when you would u like to have some certain value
        },
        profilePic: {
            type: String,
            default: "",
        },
        // createdAt, updatedAt => Member since <createdAt>

    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;