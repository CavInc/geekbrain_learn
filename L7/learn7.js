window.onload=function() {
  console.log("START");
  console.log(jQuery);
  (function ($){
    
    $(document).on("click","#send",function(event){
      if ($("#gender").val()==='M') var gender='m'
      else var gender='f';   
      $.ajax({
        url: "http://192.168.1.3/L7/validator.php",
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
          console.log(data);
        }
      });   
      event.preventDefault();
    });
  })(jQuery);
}
