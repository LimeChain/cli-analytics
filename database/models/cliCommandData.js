const mongoose = require('mongoose');

const CliCommandDataSchema = new mongoose.Schema({
    type: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    metadata: {
        type: mongoose.Schema.Types.Mixed
    }
})

const CliCommandData = mongoose.model("CliCommandData", CliCommandDataSchema);

module.exports = CliCommandData