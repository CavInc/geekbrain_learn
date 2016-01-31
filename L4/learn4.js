/**
 * 
 */
function TabPane(container_id){
  this.container_id=container_id;
  
  this.addTab(title){
    
  };
  this.delTab(index){
  };
  
  this.countTab=0;
  
  
  
}

(function($){
  $(function(){
     $("#container").after("<p> а ебать копать</p>");
     var tabpane=new TabPane('#container');
     tabpane("Первая закладка");
     
  });
})(jQuery);

window.onload=function(){

}
