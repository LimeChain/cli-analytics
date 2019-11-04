const mongoose = require('mongoose');

const CliCommandDataSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    metadata: {
        type: mongoose.Schema.Types.Mixed
    }
},
    { timestamps: true }
)

const CliCommandData = mongoose.model("CliCommandData", CliCommandDataSchema);

module.exports = CliCommandData