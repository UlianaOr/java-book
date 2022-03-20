    /* Block Areas
    Место размещения переменных в коде имеет огромное влияние на то, где 
они могут использоваться. Переменные, объявленные глобально, доступны 
по всему приложению. Переменные, объявленные локально, — только 
внутри области, в которой расположены. Внутри диапазона глобальных 
и локальных переменных у JavaScript есть огромное количество действий 
в запасе.*/


    /*let safeToProceed = false;
function isItSafe() {
 if (safeToProceed) {
 alert("You shall pass!");
 } else {
 alert("You shall not pass!");
 }
}
isItSafe();*/



   //Functions within functions
   /*let something = youSayGoodBye();
   function youSayGoodBye() {
    alert("Good Bye!");
    function andISayHello() {
    alert("Hello!");
    }
    return andISayHello;
   } */

    

    /*Рабочая среда JavaScript, отслеживающая все переменные, использование памяти, ссылок и т. д., действительно умна. В нашем примере 
ею обнаружено, что внутренняя функция (getDelay) опирается на 
переменные из внешней функции (stopWatch). Когда это происходит, 
рабочая среда обеспечивает, чтобы любые нужные переменные из 
внешней функции были доступны внутренней функции, даже если 
внешняя функция перестает действовать*/
  /* function stopWatch() {
    var startTime = Date.now();
    function getDelay() {
    var elapsedTime = Date.now() - startTime;
    alert(elapsedTime);
    }
    return getDelay;
    }
    let timer = stopWatch();
    // Сделать что-нибудь за некоторое время.
    for (let i = 0; i < 1000000; i++) {
    let foo = Math.random() * 10000;
    }
    // Вызвать возвращаемую функцию.
    timer();*/

    /*let myButton = document.querySelector("#myButton");
 myButton.addEventListener("click", doSomething, false);
 function doSomething(e) {
 alert("Is this working?");
 }*/


    //array

    let groceries =["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];
    let resultIndex = groceries.indexOf("Eggs",0);
    console.log(resultIndex); // 1


