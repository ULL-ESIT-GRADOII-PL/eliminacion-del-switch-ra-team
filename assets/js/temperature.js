
(function(exports) {
    "use strict";

<<<<<<< HEAD
     function Temperatura(valor, tipo) {
        Medida.call(this, valor, tipo);
=======

     function Temperatura(valor) {
        //Medida.call(this, valor, tipo);
        Medida.call (this,valor);
>>>>>>> desarrollo
     }

    // There we set the inheritance
    Temperatura.prototype = new Medida();
    Temperatura.prototype.constructor = Temperatura;

    exports.Temperatura = Temperatura;

})(this);
