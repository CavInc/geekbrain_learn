
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

/**
 * код для П.3
 */
function onClickP3() {
  var s=$("#myselect option[value=2]").html();
  $("#result").eq(0).html('Реультат :'+s);
}

/**
 * код для П.4
 * в одну строчку :) 
 */
function onClickP4() {
 $("ul li").eq(1).html("<b>"+$("ul li").eq(1).html()+"</b>")
}
/**
 * код для П.5
 * в одну строчку :) 
 */
function onClickP5() {
  $("#result").eq(0).html('Реультат :'+$("ul li:last").eq(0).html());
}

