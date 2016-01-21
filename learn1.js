
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
		}
	}
}
/**
 */
function createChessTable(container_id){
}

window.onload=function(){
	console.log('TEST');
	createTable('paragraf1',10,5);
}
