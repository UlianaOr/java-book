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
   function youSayGoodBye() {
    alert("Good Bye!");
    function andISayHello() {
    alert("Hello!");
    }
    return andISayHello;
   } 


