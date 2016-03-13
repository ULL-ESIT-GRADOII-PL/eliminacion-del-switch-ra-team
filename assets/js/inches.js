(function(exports) {
    function Inches(valor, type) {
        converters = {}
        converters['i'] = function(value) {
            return value;
        }
        converters['m'] = function(value) {
            return (value * 39.3701);
        }
        if (converters[type])
            valor = converters[type](valor);
        else {
            valor = Medida.invalidConversion(type, 'Inches');
        }
        Longitud.call(this, valor, "Inches");
    }

    Inches.prototype = new Longitud();
    Inches.prototype.constructor = Inches;

    exports.Inches = Inches

})(this);
