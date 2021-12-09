document.addEventListener("DOMContentLoaded", 
    function(event) {
        
        document.querySelector("button")
            .addEventListener("click", function() {
                var self = this;

                $ajaxUtils
                    .sendGetRequest("/data/name.txt",
                        function(request) {

                            console.log("here");
                            var name = request.responseText;

                            document.querySelector("#content")
                                .innerHTML = "<h2>Hello " + name + "!";
                        });

                
            });


    });