window.onload=function(){
 (function($){  
  
  $(document).on("click","#send",function(event){
    if ($("#pass").val().length<6) {
      $("#pass").after('<span style="color:red">* Длинна пароля не может быть меньше 6 символов</span>');
      event.preventDefault();
      return;
    }
    if ($("#username").val().length<6){
     $("#username").after('<span style="color:red">* Длинна логина не может быть меньше 6 символов</span>');
    }
  
    if ($("#gender").val()==='M') var gender='m'
    else var gender='f';
    $.ajax({
      url: "validator.php",
      dataType: "html",
      type: "POST",
      data: {
        username: $("#username").val(),
        password: $("#pass").val(),
        email: $("#email").val(),
        credit_card: $("#credit_card").val(),
        bio: $("#bio").val(),
        gender: gender
      },
      success: function(data){
        console.log(data);
        if (data){
          $("#response").text("Проверка пройдена");
        }else{
          $("#response").text("Данные не корректны");
        }
      }
    });
    event.preventDefault();
  });
 })(jQuery);
}
