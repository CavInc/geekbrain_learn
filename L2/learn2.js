/**
 * в шахматке реализовано выделение клетки только по выбору мышью
 * отображение выделенного элемента  и управления от клавиатуры выкинуто
 * 
 */
/**
 * вспомогательная для привязки контекста
 */ 
function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
} 

// объект через функцию 
function Chess(containerID){
	this.chess_curs = {'x':0,'y':0};
	this.containerID = containerID;
	this.select_id = undefined;
	this.create = function(){
		var color_chess = ['white','black'];
		var color_index = 0;
		console.log(this.containerID);
		var l1 = document.getElementById(this.containerID);
		l1.innerHTML = '<table id="p1-chess"></table>';
		var row = document.getElementById("p1-chess").insertRow(-1);
		row.innerHTML = '<th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th>';		
		for (i=0;i<8;i++){
			var row = document.getElementById("p1-chess").insertRow(-1);
			var header = row.insertCell(-1);
			header.className ='check_header';
			header.innerHTML = (8-i);
			header.style.textAlign = "center";
			for (j=0;j<8;j++){
				var cell = row.insertCell(-1);
				cell.innerHTML = '<p> </p>';
				cell.style.backgroundColor = color_chess[color_index];
				cell.style.border="2px solid "+color_chess[color_index];
				color_index = color_index ^ 1;
				cell.setAttribute('id',String.fromCharCode(65+j)+(8-i));
				// передаем контекст в функцию через анонимную функцию
				cell.onclick = bind(this.onClickCell,this);
			}
			color_index = color_index ^ 1;
		}
	};
	this.unselectCell = function(elem_id){
		var elm = document.getElementById(elem_id);
		if (elm!=undefined) {
			elm.style.border="2px solid "+elm.style.backgroundColor;
        }			
	};
	this.onClickCell = function(event){
		this.unselectCell(this.select_id);
		var id=event.target.id;
		this.select_id=id;
		this.selectCell(id);
	}
	this.selectCell = function(elem_id){
		var elm = document.getElementById(elem_id);
		elm.style.border='2px solid red';
	}
}

/**
 *  объект через объект :) можно сказать статический класс из Java :)
 */
var chess = {
	chess_curs: {'x':0,'y':0},
	create: function(containerID){
		var color_chess = ['white','black'];
		var color_index = 0;	
		var l1 = document.getElementById(containerID);
		l1.innerHTML = '<table id="p2-chess"></table>';
		var row = document.getElementById("p2-chess").insertRow(-1);
		row.innerHTML = '<th></th><th>a</th><th>b</th><th>c</th><th>d</th><th>e</th><th>f</th><th>g</th><th>h</th>';
		for (i=0;i<8;i++){
			var row = document.getElementById("p2-chess").insertRow(-1);
			var header = row.insertCell(-1);
			header.className = 'check_header';
			header.innerHTML = (8-i);
			header.style.textAlign = "center";
			for (j=0;j<8;j++){
				var cell = row.insertCell(-1);
				cell.innerHTML = '<p> </p>';
				cell.style.backgroundColor = color_chess[color_index];
				color_index = color_index ^ 1;
				cell.onclick = this.onClickCell;
			}
			color_index = color_index ^ 1;
		}		
	},
	unselectCell: function(){
		var elm = document.getElementById('select_cell');
		if (elm!=undefined) elm.setAttribute('id','');		
	},
	onClickCell: function(event){
		chess.unselectCell();
		var row_id = event.currentTarget.parentElement.rowIndex;
		var cell_id = event.currentTarget.cellIndex;
		chess.selectCell(event.currentTarget);
		chess.chess_curs['x'] = cell_id;
		chess.chess_curs['y'] = row_id;
	},
	selectCell: function(elem){
		elem.setAttribute('id','select_cell');		
	}
	
}

// П2.
String.prototype.addToElement = function(elem,val){
	// в данном методе отсутствует проверка на допустимый елемент HTML 
	var node = document.createElement(elem);
	node.class = val;
	node.innerHTML = this;
	return node;
}

// П3
var myHTML = Object.create(null);
myHTML['localvalue'] = '';
myHTML['addText'] = function(str){
	myHTML['localvalue'] += str;
	return this;
}
myHTML['showHTML'] = function(){
	return myHTML['localvalue'];
}
myHTML['addH'] = function(str, N){
	
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
	
	// проверяем работу П 3
	var mHtml=myHTML;
	console.log(mHtml);
	console.log(mHtml.addText('ПРИВЕТ'));
	console.log(mHtml.addText(' МИР'));
	console.log(mHtml.showHTML());
	
}
