var btn= document.getElementById('counder');
var counterclick=0;
btn.onClick(function(){
  
  counterclick=counterclick+1;
  var spn=document.getElementById('count');
  spn.innerHTML=counterclick.toString();
});
    
    
    
