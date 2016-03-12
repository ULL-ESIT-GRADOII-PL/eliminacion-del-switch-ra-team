(function(exports) {
    "use strict";

    exports.convert = function() {
        var valor = document.getElementById('convert').value;
        var elemento = document.getElementById('converted');
        elemento.innerHTML = Medida.convertir(valor);

        /*if (valor) {
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
        */
    };
})(this);
