(function(exports) {
    function Farenheit(valor, type) {
        converters = {}
        converters['k'] = function(value) {
            return (value * 1.8) - 459.67;
        }
        converters['c'] = function(value) {
            return (value * 1.8 + 32);
        }
        converters['f'] = function(value) {
            return value;
        }
        if (converters[type])
            valor = converters[type](valor);
        else {
            valor = Medida.invalidConversion(type, 'Farenheit');
        }
        Temperatura.call(this, valor, "Farenheit");
    }
    // There we set the inheritance
    Farenheit.prototype = new Temperatura();
    Farenheit.prototype.constructor = Farenheit;


    exports.Farenheit = Farenheit
})(this);
