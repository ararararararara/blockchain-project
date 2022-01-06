let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let BlockChainSchema = new Schema({

    index: {
        type: Number,
        require: true,

    },
    timestamp: {
        required: true,
        type: Date,
        default: Date.now(),
    },
    transactions: {
        required: true,
        type: Array,
    },
    prevHash: {
        required: false,
        type: String,
    },
    hash: {
        required: true,
        type: String,
    },
});
let BlockChain = mongoose.model("BlockChain".BlockChainSchema);
module.exports = BlockChain