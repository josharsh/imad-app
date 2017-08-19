var btn= document.getElementById('counter');
var ccounterclick=0;
btn.onClick(function(){
  
  ccounterclick=ccounterclick+1;
  var spn=document.getElementById('countclick');
  spn.innerHTML=ccounterclick.toString();
});
    
    
    
