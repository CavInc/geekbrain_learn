// объект через функцию 
function Chess(containerID){
	this.chess_curs={'x':0,'y':0};
	this.containerID=containerID;
	this.create=function(){
		var color_chess=['white','black'];
		var color_index=0;
		console.log(this.containerID);
		var l1=document.getElementById(this.containerID);
		l1.innerHTML='<table id="p1-chess"></table>';
		var row= document.getElementById("p1-chess").insertRow(-1);
		row.innerHTML='<th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th>';		
		for (i=0;i<8;i++){
			var row= document.getElementById("p1-chess").insertRow(-1);
			var header=row.insertCell(-1);
			header.className ='check_header';
			header.innerHTML=(8-i);
			header.style.textAlign = "center";
			for (j=0;j<8;j++){
				var cell=row.insertCell(-1);
				cell.innerHTML='<p> </p>';
				cell.style.backgroundColor=color_chess[color_index];
				color_index=color_index ^ 1;
				//cell.onclick=onClickCell;
			}
			color_index=color_index ^ 1;
		}
	};
	this.unselectCell=function(){
		var elm=document.getElementById('select_cell');
		if (elm!=undefined) elm.setAttribute('id','');		
	};
	this.onClickCell=function(event){
	}
	
}
// объект через объект :) можно сказать статический класс из Java :)
var chess={
	chess_curs:{'x':0,'y':0},
	create:function(containerID){
		var color_chess=['white','black'];
		var color_index=0;	
		var l1=document.getElementById(containerID);
		l1.innerHTML='<table id="p2-chess"></table>';
		var row= document.getElementById("p2-chess").insertRow(-1);
		row.innerHTML='<th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th>';
		for (i=0;i<8;i++){
			var row= document.getElementById("p2-chess").insertRow(-1);
			var header=row.insertCell(-1);
			header.className ='check_header';
			header.innerHTML=(8-i);
			header.style.textAlign = "center";
			for (j=0;j<8;j++){
				var cell=row.insertCell(-1);
				cell.innerHTML='<p> </p>';
				cell.style.backgroundColor=color_chess[color_index];
				color_index=color_index ^ 1;
				//cell.onclick=onClickCell;
			}
			color_index=color_index ^ 1;
		}		
	},
	unselectCell:function(){
		var elm=document.getElementById('select_cell');
		if (elm!=undefined) elm.setAttribute('id','');		
	},
	onClickCell:function(event){
	}
}

// П2.
String.prototype.addToElement=function(elem,val){
	// в данном методе отсутствует проверка на допустимый елемент HTML 
	var node=document.createElement(elem);
	node.class=val;
	node.innerHTML=this;
	return node;
}

// П3
var myHTML=Object.create(null);
myHTML['localvalue']='';
myHTML['addText']=function(str){
	return this;
}
myHTML['showHTML']=function(){
}
myHTML['addH']=function(str, N){
}



window.onload=function(){
	var chess_p1=new Chess('chess1');
	chess_p1.create();
	chess.create('chess2');
	// проверяем работу П 2 из домашнего задания
	// оборачиваем строку в элемент и присваеваем название класса
	var a='TEST'.addToElement('i','rrrr');
	var l=document.getElementById('p2');
	l.appendChild(a);
	var mHtml=myHTML;
	console.log(mHtml);
}
