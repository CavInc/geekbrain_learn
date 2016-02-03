/**
 * То что получилось использовать нельзя
 * для продакшена нужно переделать в более человеческий вид
 */
function TabPane(container_id,tabed_id){
  this.container_id = container_id;
  this.tabed_id = tabed_id;
  
  this.addTab = function(title){
    if ($(this.container_id).find("#"+this.tabed_id).length===0){
      $(this.container_id).html("<div id='"+this.tabed_id+"'></div>");
      $(this.container_id).find("#"+this.tabed_id).html('<div id="'+this.tabed_id+'_table" class="horizontal tabed_header"></div>');
    }
    $("#"+this.tabed_id+"_table").append($("<p id="+this.countTab+">"+title+"</p>"));
    if (this.countTab==0){
      $("#"+this.tabed_id+"_table > p ").addClass("active");
    };
    
    $("#"+this.tabed_id+"_table > p").click(function(event){
      $("#"+$(this).parent().attr('id')+" > p.active").removeClass("active");
      $(this).addClass('active');
      
      console.log($(this).attr('id'));
      
      $(".active_context").hide();
      $(".active_context").removeClass("active_context");
      var elm=$("#table_context"+$(this).attr('id'));
      elm.addClass('active_context');
      elm.show();
    });
    
    $("#"+this.tabed_id).append($('<div id="table_context'+this.countTab+'" class="tabed_body"></div>'));
    if (this.countTab!=0) {
      $("#table_context"+this.countTab).hide();
    } else {
      $(this.container_id+" #table_context0").addClass('active_context')
    }
    this.countTab +=1;

  };
  this.delTab = function(index){
    
  };
  this.setContentTab = function(index,content) {
    $("#table_context"+index).html(content);
  };
  
  this.countTab=0;
  this.selectIndex=-1;
  
  
}

(function($){
  $(function(){
     var tabpane=new TabPane('#container','tabpane1');
     tabpane.addTab("Первая закладка");
     tabpane.setContentTab(0,"<p> А это у нас первая вкладка </p>");
     tabpane.addTab("Вторая закладка");
     tabpane.setContentTab(1,"<p> А это у нас вторая  вкладка </p>");
     tabpane.addTab("А еще одна закладка");
     tabpane.setContentTab(2,"<p> Пусть будет это третьей закладкой </p>");     
  });
})(jQuery);

