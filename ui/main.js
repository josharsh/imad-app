var btn= document.getElementById('count');
var ccounterclick=0;
btn.onClick(function(){
  
  counterclick=counterclick+1;
  var spn=document.getElementById('count');
  spn.innerHTML=ccounterclick.toString();
});
    
    
    
