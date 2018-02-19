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
 var a= Number(prompt("Введите сумму от 5 до 20"));
var lat = 10;
var am = 5;
var cap = 8;
if (a < 5) {
var b =	Number(prompt("Недостаточно средств! Нужно внести еще :"));
var a = a + b;
}if (a >= 5) {
	var c = prompt("Выберите напиток и Введите соответствующую цыфру: (1)Late : 10грн; (2)Amerekano : 5грн; (3)Capushino : 8грн;");
}
  switch (c){
  	case "1" :
  		var sum = a - lat;
  		alert("Bаш Late готовится !" + "Ваша сдача :  " + sum + "грн.");
  		break;
  	case "2" :
  	var sum = a - am;
  		alert("Bаш Amerekano готовится !" + "Ваша сдача :  " + sum + "грн.");
  		break;
  	case "3" :
  	var sum = a - cap;
  		alert("Bаш Capushino готовится !" + "Ваша сдача :  " + sum + "грн.");
  		break;
  }

  if (sum < 5) {
  	alert("Ваш напиток готов !! Возьмите вашу здачу : " + sum);
  }
else if (sum >= 5) {
var candy =	prompt("Хотите батончик ? Нажмите : (1) - Baunty : 10грн; (2) - Snikers : 10грн; (3) - Lion : 5грн; (4) - НЕЧЕГО");
}
	var baun = 10;
	var lion = 5;

 switch (candy){
  	case "1" :
  		var sum1 = sum - baun;
  		alert("Ваш напиток готов !"+ "Возьмите вашу сдачу :  " + sum1 + "грн.");
  		break;
  	case "2" :
  		var sum1 = sum - baun;
  		alert("Ваш напиток готов !" + "Возьмите вашу сдачу :  " + sum1 + "грн.");
  		break;
  	case "3" :
  		var sum1 = sum - lion;
  		alert("Ваш напиток готов !" + "Возьмите вашу сдачу :  " + sum1 + "грн.");
  		break;
  	case "4" :
  		alert("Ваш напиток готов !" + "Возьмите вашу сдачу :  " + sum + "грн.");
  		break;
  }