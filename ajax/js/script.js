document.addEventListener("DOMContentLoaded",
    function(event) {

        function sayHello() {
            console.log(event);
            
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

        document.querySelector("body")
            .addEventListener("mousemove", 
                function(event) {
                    if(event.shiftKey) {
                        console.log("(x, y): (" + event.clientX + ", " + event.clientY + ")");
                    }
                }
            )

    });

