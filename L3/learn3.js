
/**
 * код для П.1 
 */
function onClickP1() {
  var elem = $("div > h1");
  for (var i = 0;i < elem.length; i++){
     elem.eq(i).html('------ RRRRRR ------:' + i);
  }
}

 

window.onload=function(){
  console.log( $("#block"));
  var p=$("#block p")[0];
  //p.innerHTML="HHHHHHH !@#$#";
}
