// IIFE
(function(window) {

    // sets up a fake namespace
    var ajaxUtils = {};

    // returns a HTTP request object
    function getRequestObject() {
        if(window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else if(window.ActiveXObject) {
            // for very old browsers
            return (new ActiveXObject("Microsofr.XMLHTTP"));
        } else {
            globalThis.alert("Ajax is not supported!");
            return null;
        }
    }

})(window);