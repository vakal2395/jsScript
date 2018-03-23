// var a=Number(prompt("input firs number"));

// var a = prompt("В шкафу лежит двадцать два синих носка и тридцать пять черных носков. Вам надо в полной темноте взять из шкафа пару носков.Какое найменьшее количество носков нужно взять, чтобы с гарантией получить совпадающую пару ?");

// if(a == "три"){
// 	alert("Ты молодец! Oтвет правельный, можешь с уверенностью покутать себе носки");
// }else if(a == "3"){
// 	alert("Ты молодец! Oтвет правельный, можешь с уверенностью покутать себе носки");
// }
// else{
// 	alert("неправильно подумай еще");
// }

// var str = "Я-javascript!";
// 	document.write(str);
// var result = 1;
// var i = 1;
// while (i <= a) {
// result = result * i;
// i++;

// document.write(result +" ");
// }


// var result = 1;
// var i = 1;
// do {
// result = result * i;
// i++;
// }
// while (i <= a){
// document.write(result);
// }
// var i = 0;
  
// while (i <= 100) {
//   i++;
//   if (i%3 == 0 && i%2==1) {
	
//    console.log(i + ' ');
//   }
  
// }


//  var a= Number(prompt("Введите сумму от 5 до 20"));
// var lat = 10;
// var am = 5;
// var cap = 8;


// while(a < 5){
    
//     var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + a + " !!!" + " Нужно внести еще :"));
//     a += b;
//   }


// if (a >= 5) {
// 	var c = prompt("Ваш лимит :   " + a  + "  Выберите напиток и Введите соответствующую цыфру: (1)Late : 10грн; (2)Amerekano : 5грн; (3)Capushino : 8грн;");
// }
//   switch (c){
//   	case "1" :
//     while(a <= lat){
//     var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + a + " !!!" + " Нужно внести еще :"));
//     a += b;
//   }
//   		var sum = a - lat;
//   		alert("Bаш Late готовится !");
//   		break;
//   	case "2" :
//      while(a <= am){
//     var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + a + " !!!" + " Нужно внести еще :"));
//     a += b;
//   }
//   	var sum = a - am;
//   		alert("Bаш Amerekano готовится !");
//   		break;
//   	case "3" :
//      while(a <= cap){
//     var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + a + " !!!" + " Нужно внести еще :"));
//     a += b;
//   }
//   	var sum = a - cap;
//   		alert("Bаш Capushino готовится !");
//   		break;
//   }
//   while(a <= 5){
//     alert("please enter more money");
//     var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + a + " !!!" + " Нужно внести еще :"));
//     a += b;
//   }

//   if (sum < 5 && sum > 0 ) {
//   	alert("Ваш напиток готов !! Возьмите вашу здачу : " + sum);
//   }
// else if (sum >= 5) {
// var candy =	prompt("Хотите батончик ? Нажмите : (1) - Baunty : 10грн; (2) - Snikers : 10грн; (3) - Lion : 5грн; (4) - НЕЧЕГО");
// }
// 	var baun = 10;
// 	var lion = 5;

//  switch (candy){
//   	case "1" :
//        while(sum < baun){
//         var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + sum + " !!!" + " Нужно внести еще :"));
//         sum += b;
//         } 
//   		var sum1 = sum - baun;
//   		alert("Ваш напиток готов !"+ "Возьмите вашу сдачу :  " + sum1 + "грн.");
//   		break;
//   	case "2" :
//        while(sum < baun){
//       var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + sum + " !!!" + " Нужно внести еще :"));
//       sum += b;
//       }
//   		var sum1 = sum - baun;
//   		alert("Ваш напиток готов !" + "Возьмите вашу сдачу :  " + sum1 + "грн.");
//   		break;
//   	case "3" :
//      while(sum < lion){
//       var b = Number(prompt("Недостаточно средств!  " + "Ваш лимит : " + sum + " !!!" + " Нужно внести еще :"));
//       sum += b;
//       }
//   		var sum1 = sum - lion;
//   		alert("Ваш напиток готов !" + "Возьмите вашу сдачу :  " + sum1 + "грн.");
//   		break;
//   	case "4" :
//   		alert("Ваш напиток готов !" + "Возьмите вашу сдачу :  " + sum + "грн.");
//   		break;
//   }

// var rad = Number(prompt("input radius"));
//  var pi = 3.14;
// var r2 =Math.pow(rad,2);

//  var l = 2 * pi *rad;
//  var S = pi *r2;
//  document.write("Длина круга :  " + l.toFixed(0) + "<br>" + "Площадь круга :  " + S.toFixed(0));

 
// alert(mas);

// var menu = {
//   width: 300,
//   height: 200,
//   title: "Menu"
// }
// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }

// function multiplyNumeric(obj){
// 	for (var kay in obj) {
// 		if(isNumeric(obj[kay])===true){
// 				obj[kay]*=2;
// 		}
// 	}
// 	return obj;
// }
// var menu2 = multiplyNumeric(menu);
// console.log(menu2);

// var mas = [];
// var a = true;
// 	while(a){
// var num = Number(prompt('input number'));
// 	if (num != '') {
// 	mas.push(Number(num));
// 	}
// 	else{
// 		a = false;
// 	}
// }
// 	var sum =0;
// 	for (var i = 0; i < mas.length; i++) {
// 		sum = sum + mas[i];
// 	}
// 	document.write(sum);

// function suma (arr){
// 	var sum = 0;
// for(var i = 0; i < arr.length; i++){
// 	sum +=arr[i];
// }
// return sum;
// }
// suma(mas);

// var count = 0;

// for (var i = 2; i < 100 ; i++) {
// 		for (var j = 1; j < i; j++) {
// 			if(i%j === 0){
// 				count++;
// 			}
// 		}
// 	if(count < 2){
// 		console.log(i);
// 	}
// 	count=0;
// }

// var a = [1,2,3,4,5,6];
// var b = [7,8,9,10,11,12];
// var c = [13,14,15,16,17,18];
// var d = [19,20,21,22,23,24];

// var matr =[];
// matr.push(a,b,c,d);

// for (var i = 0; i< matr.length;i++){
// 	for(var j =0; j <matr[i].length;j++){
// 		console.log(matr[i][j]);
// 	}
// }


function fib() {
	var mas = [];
	var n = Number(prompt("input number"));
 	var a = 0, b = 1;
 for (var i = 1; i <= n; i++) {
    var c = a + b;
    a = b;
   b = c;        
   mas.push(a);
  }
  alert(mas);
}
fib();


var mat =   [['1',3,4,5,false,6],
			[1,3,'4' ,true,5,'k',6],
			['1',3,4,5,false,6],
			['1',3,4,'5',true,6],
			['1',3,'4',5,false,6],
			['1',3,4,5,'false',6]
			]
	
	var arr = [];

		for (var i = 0; i < mat.length; i++) {
		  	for (var j = 0; j < mat[i].length; j++) {
		 		if(typeof(mat[i][j])==="number"){
		 			arr.push(mat[i][j]);
		 		}
		  	}
		  }  
		  alert(arr);

var mat =   [
			[1,2,3],
			[4,5,6],
			[7,8,9]
				  ];

	function digNum(mas){
		var arr =[];
		var pos = 1;
		for (var i = 0; i < mas.length; i++) {
			arr.push(mas[i][mas.length-pos]);
				pos++;
		}
		alert(arr);
	}
	digNum(mat);
