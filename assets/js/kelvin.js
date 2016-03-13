(function(exports) {
    function Kelvin(valor, type) {
        converters = {}
        converters['k'] = function(value) {
            return value;
        }
        converters['c'] = function(value) {
            return (value + 273.15);
        }
        converters['f'] = function(value) {
            return (5 * (value - 32) / 9) + 273.15;
        }
        if (converters[type])
            valor = converters[type](valor);
        else {
            valor = Medida.invalidConversion(type, 'Kelvin');
        }
        Temperatura.call(this, valor, 'Kelvin');
    }
    // There we set the inheritance
    Kelvin.prototype = new Temperatura();
    Kelvin.prototype.constructor = Kelvin;


    exports.Kelvin = Kelvin;

})(this);
