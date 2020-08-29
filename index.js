var q = require('./questData.json');

module.exports.json = function () {

    return q;
}
module.exports.hello = function () {
    console.log("if you need help use the .help() method");
    console.log("This is a message from the demo package");
}
module.exports = (str) => {
    return `💩${str}💩`;
}
module.exports.help = function () {
    console.log("import q from \"osrs-quest-tool\";\n console.log(q.json);");

}