document.addEventListener("DOMContentLoaded",
    function(event) {

        function sayHello() {
            var name = document.getElementById("name").value;
            var message = "Hello " + name + "!";
        
            document
                .getElementById("content")
                .textContent = message;
        
            if (name === "student") {
                var title = 
                    document
                        .querySelector("#title")
                        .textContent;
                title += " & Lovin' it!";
                document
                    .querySelector("#title")
                    .textContent = title;
            }
        }
        
        // Unobstrusive event binding
        document.querySelector("button")
            .addEventListener("click", sayHello);
        
        //document.querySelector("button")
        //    .onClick = sayHello;

    });

