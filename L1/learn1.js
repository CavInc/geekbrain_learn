
function h2d(h) {return parseInt(h,16);} 
// взята с cyberguru.ru
function decToHex(n){ return Number(n).toString(16); }

var palitre=['black','green','lime','yellow','red','goldenrod','blue','silver','darkgreen','indigo'];
var letter_array=[];

/**
 * Создаем таблицу произвольного размера
 * п.1 
 */
function createTable(container_id,row_count,col_count){
	var l1=document.getElementById('paragraf1');
	l1.innerHTML='<table id="p1-table"></table>';
	for (i=0;i<row_count;i++){
		var row = document.getElementById("p1-table").insertRow(-1);
		for (j=0;j<col_count;j++){
			var cell=row.insertCell(-1);
			// получим код буквы
			var letter=Math.floor(Math.random()*(h2d('044F')-h2d('0410')-1)+h2d('0410'));
			letter_array.push(String.fromCharCode(letter)); // запихаем ее в массив :)
			// будем использовать палитру из 
			var color2=Math.floor(Math.random()*(9-0+1)+0);
			cell.innerHTML='<p> </p>';
			cell.innerText=String.fromCharCode(letter);
			cell.style.backgroundColor=palitre[color2];
			cell.style.color='white';
			cell.style.textAlign = "center";
		}
	}
}

/**
 * Снимаем маркер выделенной ячейки
 */
function unselectCell(){
	var elm=document.getElementById('select_cell');
	if (elm!=undefined) elm.setAttribute('id','');
}
/**
 * ставим маркер
 * elem - ссылка на объект на который ставим
 */
function selectCell(elem){
	elem.setAttribute('id','select_cell');
}
/**
 * ставим маркет по координатам ячейки
 */
function selectCellCoord(x,y){
	var l1=document.getElementById('p1-chess');
	selectCell(l1.children[0].children[y].children[x])
}

/**
 * выводим название ячейки шахматки
 */
function outChessCellIndex(row_id,cell_id){
	console.log(row_id+" "+cell_id);
	var l1=document.getElementById('out_panel');
	var leter=(String.fromCharCode(64+cell_id))+(9-row_id);
	l1.innerHTML='<p>'+leter+'</p>';
}
/**
 * обработка клика
 */
function onClickCell(event){
	// эту бредятину можно было не писать а извлекать id ячейки. 
	// но пусть будет так :)
	unselectCell();
	var row_id=event.currentTarget.parentElement.rowIndex;
	var cell_id=event.currentTarget.cellIndex;
	outChessCellIndex(row_id,cell_id);
	selectCell(event.currentTarget);
	chess_curs['x']=cell_id;
	chess_curs['y']=row_id;
}
var chess_curs={'x':0,'y':0};
/**
 * обрабатываем клавиатуру.
 */
function onKeyUP(event){
	var code=event.keyCode;
	if (code===37) {
		//left
		chess_curs['x'] -=1;
		if (chess_curs['x']<1) chess_curs['x']=8;
	}
	if (code===40) {
		//down
		chess_curs['y'] +=1;
		if (chess_curs['y']>8) chess_curs['y']=1;
	}
	if (code===39) {
		//rigth
		chess_curs['x'] +=1;
		if (chess_curs['x']>8) chess_curs['x']=1;
	}
	if (code===38) {
		//up
		chess_curs['y'] -=1;
		if (chess_curs['y']<1) chess_curs['y']=8;
	}	
	unselectCell();
	selectCellCoord(chess_curs['x'],chess_curs['y']);
	outChessCellIndex(chess_curs['y'],chess_curs['x']);
} 

/**
 * Создаем шахматную доску. 8x8
 * 
 */
function createChessTable(container_id){
	var color_chess=['white','black'];
	var color_index=0;
	var l1=document.getElementById(container_id);

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
			cell.onclick=onClickCell;	
		}
		color_index=color_index ^ 1;
	}
}

window.onload=function(){
	createTable('paragraf1',10,5);
	createChessTable('chess');
	addEventListener("keyup",onKeyUP);
}
