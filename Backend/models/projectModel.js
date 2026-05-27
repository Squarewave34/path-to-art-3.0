// 1
const mongoose = require('mongoose')
// 2
const Schema = mongoose.Schema
// 3
const projectSchema = new Schema({
    // 5
    title: {type: String, required: true},
    // user,
    artworkType: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "artworkType"
    },
    collection: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "collection"
    },
    status: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "status"
    },
    important: {type: Boolean},
    current: {type: Boolean},
    process: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "process"
    },
    notes: {type: String},
    inspoBord: {type: String},
    images: [{type: String}],
    deadline: {type: Date},
    startDate: {type: Date},
    reminder: {type: Date},
    collaborator: [{type: String}],
    collaboratorLinks: [{type: String}],
}, { timestamps: true})
// 4
module.exports = mongoose.model('Project', projectSchema)