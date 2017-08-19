var btn= document.getElementById('counter');
var counter=0;
btn.onClick(function(){
  
  counter=counter+1;
  var spn=document.getElementById('count');
  spn.innerHTML=counter.toString();
});
    
    
    
