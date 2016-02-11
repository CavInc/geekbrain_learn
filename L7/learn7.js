window.onload=function() {
  console.log("START");
  console.log(jQuery);
  (function ($){
    $('#pg_bar').progressbar();
    
    $('#birthday').datepicker();

    // вешаем обработчики на ввод значений полей
    var inp_elm=$("input");
    for (var i=0;i<inp_elm.length;i++){
      // blur ?
      $('#'+inp_elm[i].id).change(function(event){
        var summ_input_value=0;
        // считаем есть ли значение value у элементов 
        var inp_elm=$("input")
        for (var i=0;i<inp_elm.length;i++){
          // немного криво но первое что пришло в голову
          if ($('#'+inp_elm[i].id).val().length!=0) summ_input_value +=1;
        }
        if (summ_input_value==0) $('#pg_bar').progressbar("value");
        if (summ_input_value==1) $('#pg_bar').progressbar("value",10);
        if (summ_input_value==2) $('#pg_bar').progressbar("value",20);
        if (summ_input_value==3) $('#pg_bar').progressbar("value",40);
        if (summ_input_value==4) $('#pg_bar').progressbar("value",80);
        if (summ_input_value==5) $('#pg_bar').progressbar("value",100);         
      });
    }
    
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
