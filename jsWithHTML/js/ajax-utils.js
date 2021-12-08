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

    ajaxUtils.sendGetRequest = 
        function(requestUrl, responseHandler) {
            var request = getRequestObject();
            request.onreadystatechange = 
                function() {
                    handleResponse(request, responseHandler);
                };
            request.open("GET", requestURL, true); // true denotes asynchronous
            request.send(null);
        };

    function handleResponse(request, responseHandler) {
        if((request.readyState == 4) && (request.status == 200)) {
            responseHandler(request);
        }
    }

    globalThis.$ajaxUtils = ajaxUtils;

})(window);