// Imports
const { model, Schema } = require("mongoose");

// Definir schema (cómo va a estar organizado)
let taskSchema = Schema ({
    title: String,
    description: String,
    status: {
        type: Boolean,
        default: false
    }
});

// Preparar para exportar
module.exports = model('tasks', taskSchema);