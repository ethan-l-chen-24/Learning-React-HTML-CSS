document.addEventListener("DOMContentLoaded", 
    function(event) {
        
        document.querySelector("button")
            .addEventListener("click", function() {
                var self = this;

                $ajaxUtils
                    .sendGetRequest("/data/name.json",
                        function(res) {

                            var message = res.firstName + " " + res.lastName;
                            if(res.likesChineseFood) {
                                message += " likes Chinese food";
                            } else {
                                message += " does not like Chinese food";
                            }

                            message += " and uses ";
                            message += res.numberOfDisplays;
                            message += " for coding.";

                            document.querySelector("#content")
                                .textContent = message;

                            /*
                            console.log("here");
                            var name = res.responseText;

                            document.querySelector("#content")
                                .innerHTML = "<h2>Hello " + name + "!";
                                */
                        });

                
            });


    });