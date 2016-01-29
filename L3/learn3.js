
/**
 * код для П.1 
 */
function onClickP1() {
  var elem = $("div > h1");
  for (var i = 0;i < elem.length; i++){
     elem.eq(i).html('------ RRRRRR ------:' + i);
  }
}

/**
 * код для П.2
 */
function onClickP2() {
  var elem=$(":text");
  elem.eq(0).val("Значение 1");
  elem.eq(1).val("Значение 2");
}

window.onload=function(){
  console.log( $("#block"));
  var p=$("#block p")[0];
  //p.innerHTML="HHHHHHH !@#$#";
}
