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

    /*let groceries =["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];
    let resultIndex = groceries.indexOf("Eggs",0);
    console.log(resultIndex); */

    //let good = ["Mario", "Luigi", "Kirby", "Yoshi"];
    //let bad = ["Bowser", "Koopa Troopa", "Goomba"];
    //Чтобы совместить их, используйте метод concat для массива, который 
    //вы хотите расширить, и передайте в него второй массив в виде аргумента. 
     //В итоге будет возвращен новый массив, содержащий и good, и bad:

    /*let goodAndBad = good.concat(bad);
    console.log(goodAndBad);*/




    // map (отображение), 
    //reduce (сокращение) и filter (фильтрация)

    /*let names = ["marge", "homer", "bart", "lisa", "maggie"];
    function capitalizeItUp(item) {
     let firstLetter = item.charAt(0).toUpperCase();
     return firstLetter + item.slice(1);
    }
    let newNames = names.map(capitalizeItUp);
    console.log(newNames);*/



    //filter

      /*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
   let evenNumbers = numbers.filter(function (item) {
   return (item % 2 == 0);
    });
     console.log(evenNumbers);*/




     //reduce

     /*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
     let total = numbers.reduce(function(total, current) {
        return total + current;
       }, 0);
       console.log(total);*/

      /* let words = ["Where", "do", "you", "want", "to", "go", "today?"];
let phrase = words.reduce(function (total, current, index) {
 if (index == 0) {
 return current;
 } else {
 return total + " " + current;
 }
}, "");
console.log(phrase);*/


       


    //strings in programming

    let text = "this is some text";
    let moreText = 'I am in single quotes!';
    console.log("this is some more text");

    let initial = "hello";
    console.log(initial + " world!");
    console.log("I can also " + "do this!");




