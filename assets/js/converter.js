(function(exports) {
    "use strict";


    function Longitud(valor, tipo) {
        Medida.call(this, valor, tipo);
    }

    // There we set the inheritance
    Longitud.prototype = new Medida("34c");
    Longitud.prototype.constructor = Longitud;

    function Meters(valor) {
        Longitud.call(this, valor, "Meters");
    }

    Meters.prototype = new Longitud();
    Meters.prototype.constructor = Meters;

    Meters.prototype.toInches = function() {
        return (this.valor * 39.3701);
    }

    Meters.prototype.to = function(outputType) {
        switch (outputType.toLowerCase()) {
            case 'i':
                return this.toInches() + " Inches";
            default:
                return "Input format is incorrect, please read EXAMPLES below.";
        }
    }

    function Inches(valor) {
        Longitud.call(this, valor, "Inches");
    }

    Inches.prototype = new Longitud();
    Inches.prototype.constructor = Inches;

    Inches.prototype.toMeters = function() {
        return (this.valor / 39.3701);
    }

    Inches.prototype.to = function(outputType) {
        switch (outputType.toLowerCase()) {
            case 'm':
                return this.toMeters() + " Meters";
            default:
                return "Input format is incorrect, please read EXAMPLES below.";
        }
    }


    exports.Farenheit = Farenheit;
    exports.Kelvin = Kelvin;

    exports.Longitud = Longitud;
    exports.Meters = Meters;
    exports.Inches = Inches;

  //  Conversor['c'] = Celsius.prototype.to
  //  Conversor['f'] = Farenheit.prototype.to
  //  Conversor['k'] = Kelvin.prototype.to

    exports.convert = function() {
        var valor = document.getElementById('convert').value,
            elemento = document.getElementById('converted'),
            expresion = XRegExp('(?<num>      [-+]?[0-9]+(.[0-9]+)?[ ]*(?:e[+-]?[ ]*[0-9]+)?)[ ]*   # number       \n' +
                '(?<input>    [fkcmi])[ ]*                                           # inputTemp    \n' +
                '(?<to>       (?:to)?)[ ]*                                           # to           \n' +
                '(?<output>   [fkcmi])[ ]*                                           # outputTemp', 'x' + 'i'),

            valor = XRegExp.exec(valor, expresion);

        if (valor) {
            switch (valor.input.toLowerCase()) {
                case 'c': // CELSIUS TO X
                    var celsius = new Celsius(parseFloat(valor.num));
                    elemento.innerHTML = celsius.to(valor.output);
                    break;
                case 'f': // FARENHEIT TO X
                    var farenheit = new Farenheit(parseFloat(valor.num));
                    elemento.innerHTML = farenheit.to(valor.output);
                    break;
                case 'k': // KELVIN TO X
                    var kelvin = new Kelvin(parseFloat(valor.num));
                    elemento.innerHTML = kelvin.to(valor.output);
                    break;
                case 'm': // METERS TO X
                    var meters = new Meters(valor.num);
                    elemento.innerHTML = meters.to(valor.output);
                    break;
                case 'i': // INCES TO X
                    var inches = new Inches(valor.num);
                    elemento.innerHTML = inches.to(valor.output);
                    break;
                default:
                    elemento.innerHTML = "Input format is incorrect, please read EXAMPLES below.";
            }
        } else
            elemento.innerHTML = "Input format is incorrect, please read EXAMPLES below.";

    };
})(this);
