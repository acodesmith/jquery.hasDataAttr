/**
 * Check for a Data Attribute
 * Check the Data Attribute is not empty
 * Check the Data Attribute for a value
 * returns Boolean
 */
;(function ( $ ) {

    $.fn.hasDataAttr = function ( dataAttr, value ) {

        var valueType = typeof value
            ,isDefined = typeof this.attr('data-'+dataAttr) != 'undefined';

        if(valueType != 'undefined' && isDefined){

            var attrVal = this.attr('data-'+dataAttr);

            if(valueType == 'boolean'){
                return 0 !== attrVal.length;
            }
            if(valueType == 'string'){
                return attrVal === value;
            }
        }

        return isDefined;
    };

})( jQuery, window, document );