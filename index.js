var ajax;

function getProducts() {
    
    // Create AJAX Object:
    ajax = new XMLHttpRequest();
    
    // Configure - Get Request, Destination Page, true = Asynchronous
    ajax.open("GET", "API.php?command=allProducts", true);
    
    // Which function to call on any change: 
    ajax.onreadystatechange = createUI;
    
    // Create the request:
    ajax.send();
}


function createUI() {
    
    // ajax.readyState = 4 ==> Data got from the server:
    if(ajax.readyState == 4) {
        
        // If there is no error:
        if(ajax.status == 200) {
            
            // Convert AJAX string into a real array:
            var products = JSON.parse(ajax.responseText);
            
            // Create <ul>...</ul> from the json: 
            var ul = "<ul>";
            for(var i = 0; i < products.length; i++) {
                var li = "<li>" + products[i].ProductName + "</li>";
                ul += li;
            }
            ul += "</ul>";

            // Display the <ul>:
            document.getElementById("container").innerHTML = ul;
        }
        else {
            
            // Display the error: 
            alert(ajax.status + " --> " + ajax.statusText);
        }
        
    }
}


