window.onload=function(){
 (function($){  
  
  $(document).on("click","#send",function(event){

    if ($("#gender").val()==='M') var gender='m'
    else var gender='f';
    $.ajax({
      url: "validator.php",
      dataType: "json",
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
        $('.error').remove();
        if (data.result){
          $("#response").text("Проверка пройдена");
        }else{
          var err=data.error;
          if (err.hasOwnProperty('Credit Card')){
            $('#credit_card').after('<span class="error"> * '+err['Credit Card']+'</span>'); 
          }
          if (err.hasOwnProperty('Email')){
            $('#email').after('<span class="error"> * '+err['Email']+'</span>');
          }
          if (err.hasOwnProperty('Username')){
            $('#username').after('<span class="error"> * '+err['Username']+'</span>');
          }
          if (err.hasOwnProperty('Password')){
            $('#pass').after('<span class="error"> * '+err['Password']+'</span>');
          }
          
          $("#response").html('<span class="error"> Данные не корректны </span>');
        }
      }
    });
    event.preventDefault();
  });
 })(jQuery);
}
