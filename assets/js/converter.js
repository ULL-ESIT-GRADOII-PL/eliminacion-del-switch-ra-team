(function(exports) {
    "use strict";

    exports.convert = function() {
        var valor = document.getElementById('convert').value;
        var elemento = document.getElementById('converted');
        elemento.innerHTML = Medida.convertir(valor);
    };
})(this);
