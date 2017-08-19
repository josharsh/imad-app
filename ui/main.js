console.log('Loaded!');
// Change the Text Of the Main File
var element = document.getElementById('maintxt');
element.innerHTML="New Value";

var picture= document.getElementById('PIC');
    PIC.onclick= function()
    {var marginLeft=0;
        function moveRight()
    {
        marginLeft=marginLeft+10;
      PIC.style.marginLeft = marginLeft+'px';
        
    }
        var interval= setInterval(moveRight, 100);
    PIC.style.marginLeft='100px';
    
    
    
    
};