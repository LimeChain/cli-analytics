const mongoose = require('mongoose');

const OptionsSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true,
         trim: true
     },
     value: {
         type: mongoose.Mixed
     }
});

const CliCommandDataSchema = new mongoose.Schema({
    command: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    options: {
        type: [OptionsSchema]
    }

})

const CliCommandData = mongoose.model("CliCommandData", CliCommandDataSchema)

module.exports = CliCommandData