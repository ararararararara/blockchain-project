let database = require("./src/database");
database.onConnect(() => {
    let BlockChain = require("./src/blockChain");
    let blockChain = new BlockChain();
    let PROOF = 1560;
    let hash = require('object-hash')

    /*
if (proofOfWork() == PROOF) {
    blockChain.addNewTransaction("islem", "alex", 200);
    let prevHash = blockChain.lastBock() ?
        blockChain
            .lastBock()
            .hash :
        null;
    blockChain.addNewBlock(prevHash);
}
*/

    console.log("Chain : ", blockChain.chain);

})





