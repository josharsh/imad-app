/*var button= document.getElementById('counter');

button.onClick =function () {
    
    
    
    var request= new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE());{
            if (request.status === 200) {
                var counter = request.responseText;
                var span= document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
        

    request.open('GET', 'http://harshjoshipth.imad.hasura-app.io/counter', true);
    request.send(null);
    
    
    
    
};
    */
    


//counter code
var button=document.getElementById('counter');
button.onClick = function() {
    //Make a request to counter endpoint
    
    
    //capture the response and store it in a variable
    
    counter=0;
    //render the variable in correct span
    counter = counter+1;
    var span=document.getElementById('count');
    span.innerHTML= counter.toString();
};
    
