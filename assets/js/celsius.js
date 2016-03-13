(function(exports) {
    function Celsius(valor, type) {
        converters = {}
        converters['k'] = function(value) {
            return value - 273.15;
        }
        converters['c'] = function(value) {
            return value;
        }
        converters['f'] = function(value) {
            return (value - 32) * 5 / 9;
        }
        if (converters[type])
            valor = converters[type](valor);
        else {
            valor = Medida.invalidConversion(type, 'Celsius');
        }
        Temperatura.call(this, valor, 'Celsius');
    }

    // There we set the inheritance
    Celsius.prototype = new Temperatura();
    Celsius.prototype.constructor = Celsius;

    exports.Celsius = Celsius;

})(this);
