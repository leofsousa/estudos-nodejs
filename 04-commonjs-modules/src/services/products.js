// todas as funções que lidam com produtos

async function getFullName(codeId, productName){
    console.log("Produto: " + codeId + " -- " + productName);
}

async function getProductLabel(productName) {
    console.log("Product: " + productName)
} 

module.exports = {
    getFullName,
    getProductLabel
}