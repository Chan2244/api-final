const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassesSchema = new Schema ({
    className: {
        type: String,
        required: true,
    },
    hitpoints: {
        type: Number,
        required: true,
    },
    wealth: {
        type: Number,
        required: true,
    },
    classAlignment: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("classes", ClassSchema);