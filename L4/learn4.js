/**
 * 
 */
function TabPane(container_id,tabed_id){
  this.container_id = container_id;
  this.tabed_id = tabed_id;
  
  this.addTab = function(title){
    if ($(this.container_id).find("#"+this.tabed_id).length===0){
      $(this.container_id).html("<div id='"+this.tabed_id+"'></div>");
      $(this.container_id).find("#"+this.tabed_id).html('<div id="'+this.tabed_id+'_table" class="horizontal tabed_header"></div>');
    }
    $("#"+this.tabed_id+"_table").append($("<p>"+title+"</p>"));
    if (this.countTab==0){
      $("#"+this.tabed_id+"_table > p ").addClass("active");
    }
    $("#"+this.tabed_id+"_table > p").click(function(event){
      console.log(event);
      $("#"+this.tabed_id+"_table > p .active").removeClass("active");
      
    });
    $("#"+this.tabed_id).append($('<div id="table_context'+this.countTab+'" class="tabed_body"></div>'));
    if (this.countTab!=0) {
      $("#table_context"+this.countTab).hide();
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
     $("#container").after("<p> а ебать копать</p>");
     var tabpane=new TabPane('#container','tabpane1');
     tabpane.addTab("Первая закладка");
     tabpane.setContentTab(0,"<p> А это у нас первая вкладка ");
     tabpane.addTab("Вторая закладка");
     tabpane.setContentTab(1,"<p> А это у нас вторая  вкладка ");
     
  });
})(jQuery);

window.onload=function(){

}
