(function(exports) {
    function Longitud(valor, tipo) {
        Medida.call(this, valor, tipo);
    }

    // There we set the inheritance
    Longitud.prototype = new Medida("34c");
    Longitud.prototype.constructor = Longitud;
    exports.Longitud = Longitud
})(this);
