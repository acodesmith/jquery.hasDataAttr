/**
 * Super Simple Check for Data Attribute
 * Returns Boolean
  */
;(function ( $ ) {

    $.fn.hasDataAttr = function ( dataAttr ) {

        return typeof this.attr('data-'+dataAttr) != 'undefined';
    };

})( jQuery, window, document );
