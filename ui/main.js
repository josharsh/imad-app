var btn= document.getElementById('count');
var ccounterclick=0;
btn.onClick(function(){
  
  ccounterclick=ccounterclick+1;
  var spn=document.getElementById('count');
  spn.innerHTML=ccounterclick.toString();
});
    
    
    
