(function(exports) {
    function Meters(valor, type) {
        converters = {}
        converters['m'] = function(value) {
            return value;
        }
        converters['i'] = function(value) {
            return (value / 39.3701);
        }
        if (converters[type])
            valor = converters[type](valor);
        else {
            valor = Medida.invalidConversion(type, 'Meters');
        }
        Longitud.call(this, valor, "Meters");
    }

    Meters.prototype = new Longitud();
    Meters.prototype.constructor = Meters;

    exports.Meters = Meters
})(this);
