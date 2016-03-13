(function(exports) {

    "use strict";
    const REGEX = XRegExp('(?<num>      [-+]?[0-9]+(.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*    # number       \n' +
        '(?<input>    [a-z])[ ]*                                           # inputTemp    \n' +
        '(?<to>       (?:to)?)[ ]*                                           # to           \n' +
        '(?<output>   [a-z])[ ]*                                           # outputTemp', 'x' + 'i');


    var converters = {}
    converters['k'] = function(value, type) {
        return new Kelvin(value, type);
    }
    converters['c'] = function(value, type) {
        return new Celsius(value, type);
    }
    converters['f'] = function(value, type) {
        return new Farenheit(value, type);
    }
    converters['m'] = function(value, type) {
        return new Meters(value, type);
    }
    converters['i'] = function(value, type) {
        return new Inches(value, type);
    }




    function Medida(val, tipo) {
        if (val && !tipo) {
            var regexp = /([+-]?\d+(?:\.\d+)?(?:e[+-]?\d+)?)\s*([cfkmi])/i;

            var m = val.match(regexp);

            this.valor = m[1];
            this.tipo = m[2];

        } else if (val && tipo) {
            this.valor = val;
            this.tipo = tipo;
        }
        /* It accepts one parameter, like:  new Medida("45.2 Km") */
    }

    Medida.prototype.constructor = Medida;

    Medida.prototype.getValue = function() {
        return this.valor;
    }

    Medida.prototype.getType = function() {
        return this.tipo;
    }



    function evaluate(valor) {
        valor = XRegExp.exec(valor, REGEX);
        return valor;
    }

    function convertir(value) {
        value = evaluate(value); // Evaluate value using the regular expression
        if (value.output) {
            var newMeasure = converters[value.output](parseInt(value.num), value.input)
            var result = newMeasure.getValue() + " " + newMeasure.getType();
        }
        if (!newMeasure)
            return "This conversion is not supported.. read EXAMPLES below!";
        else
            return result;
    }

    function invalidConversion(from, to) {
        return "Invalid conversion: unknown how to convert from '" + from + "' to '" + to + "'.. See Examples below!"
    }

    exports.Medida = Medida;
    exports.Medida.convertir = convertir;
    exports.Medida.invalidConversion = invalidConversion;



})(this);
