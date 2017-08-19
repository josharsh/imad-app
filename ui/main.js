var btn= document.getElementById('count');
var counterclick=0;
btn.onClick(function(){
  
  counterclick=counterclick+1;
  var spn=document.getElementById('count');
  spn.innerHTML=counterclick.toString();
});
    
    
    
