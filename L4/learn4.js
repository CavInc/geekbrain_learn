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
  };
  this.delTab = function(index){
  };
  this.setContentTab = function(index,content) {
  };
  
  this.countTab=0;
  this.selectIndex=-1;
  
  
}

(function($){
  $(function(){
     $("#container").after("<p> а ебать копать</p>");
     var tabpane=new TabPane('#container','tabpane1');
     tabpane.addTab("Первая закладка");
     tabpane.addTab("Вторая закладка");
     
  });
})(jQuery);

window.onload=function(){

}
