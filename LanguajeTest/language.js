const en = require('./en.json');
const es = require('./es.json');

var language = require('./config.json').language; 

module.exports.print = function (object, attribute) {
    if (language == "es")
        return es[object][attribute];
    else if (language == "en")
        return en[object][attribute];
    else 
        throw "Lenguaje no definido o definido incorrectamente";
}