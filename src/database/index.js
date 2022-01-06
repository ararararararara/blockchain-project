let mongoose = require("mongoose");

let BlockChainModel = require("./model")

mongoose.connect("mongodb://abc:1234@127.0.0.1:27017/blockChain", (err) => {
    if (err) return console.log("데이터베이스 연결 실패");
    console.log("데이터베이스 연결")
    connectionCallback();
});

let connectionCallback = () => {

};
module.exports.onConnect = (callback) => {
    connectionCallback = callback;
}