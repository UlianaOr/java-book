   /*    for (let i = 0; i < 10; i++) {
 saySomething();
 }
 function saySomething() {
 document.writeln("hello!");
 }

  // циклы for
 for (let i = 0; i < 100; i++) {
 document.writeln(i);
 if (i == 45) {
 break;
 }
 }   
 let floors = 28;
for (let i = 1; i <= floors; i++) {
 if (i == 13) {
 // нет такого этажа (floor)
 continue;
 }
 document.writeln("At floor: " + i + "<br>");
}


   for (let i = "a"; i != "aaaaaaaa"; i += "a") {
 document.writeln("hmm. ");
}
   
let i = 0;
let yay = true;
for (; yay;) {
 if (i == 10) {
 yay = false;
 } else {
 i++;
 document.writeln("weird");
 }
}

   


//ТАЙМЕРЫ
/*Задержка с помощью setTimeout

function showAlert() {
 alert("moo!");
}
let timeoutID = setTimeout(showAlert, 5000) */



/*Выполнение циклов с помощью drawText  синтервалом циклами в - секунды

let thingToPrint = "";
 function drawText() {
 thingToPrint += "#";
 document.writeln(thingToPrint);
 }

 setInterval(drawText, 2000); */



 /* Плавная анимация с помощью requestAnimationFrame
 function animationLoop() {
 // код, отвечающий за анимацию
 requestAnimationFrame(animationLoop)
}
// Начать выполнение цикла анимации!
animationLoop();*/


    /*ОБЛАСТЬ ВИДИМОСТИ 
ПЕРЕМЕННЫХ*/

/* Global
    let counter = 0;
function returnCount() {
 return counter;
}
 alert(returnCount());*/


 /* Local
    function setState() {
 let state = "on";
}
setState();
alert(state) // undefined
*/
