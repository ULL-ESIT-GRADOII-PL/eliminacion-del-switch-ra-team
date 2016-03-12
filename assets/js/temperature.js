
(function(exports) {
    "use strict";


     function Temperatura(valor) {
        //Medida.call(this, valor, tipo);
        Medida.call (this,valor);
     }

    // There we set the inheritance
    Temperatura.prototype = new Medida();
    Temperatura.prototype.constructor = Temperatura;

    exports.Temperatura = Temperatura;

})(this);
