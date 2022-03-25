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

    /*let text = "this is some text";
    let moreText = 'I am in single quotes!';
    console.log("this is some more text");

    let initial = "hello";
    console.log(initial + " world!");
    console.log("I can also " + "do this!");*/


    /*let vowels = "aeiou";
    for (let i = 0; i < vowels.length; i++) {
    console.log(vowels[i]);
    };*/


    /*let textA = "Please";
    let textB = new String("stop!");
    let combined = textA + " make it " + textB;
    console.log(combined);


    let foo = "I really";
let blah = "why anybody would";
let blarg = "do this";
let result = foo.concat(" don't know", " ", blah, " ", blarg);
console.log(result);*/



     //SLICE// позволяет нам определять начальную и конечную позиции 
    // интересующей части строки, которую мы хотим извлечь:

     
    /* let theBigString = "Pulp Fiction is an awesome movie!";
     console.log(theBigString.slice(5, 12));*/

     /*let theBigString = "Pulp Fiction is an awesome movie!";
      console.log(theBigString.slice(0, -6));*/

      /*let theBigString = "Pulp Fiction is an awesome movie!";
      console.log(theBigString.slice(-14, -7));*/



      //SUBSTR //для разделения строк — метод.

      /*let theBigString = "Pulp Fiction is an awesome movie!";
       console.log(theBigString.substr(0, 4)); // Pulp //Первый из них является числом, определяющим стартовую позицию, 
//а второй представляет число, задающее длину итоговой подстроки.

       let theBigString = "Pulp Fiction is an awesome movie!";
         console.log(theBigString.substr(5, 7)); // Fiction*/

        // Если мы не определим длину, возвращаемая подстрока будет содержать 
        //знаки от стартовой позиции и до конца:
        /*let theBigString = "Pulp Fiction is an awesome movie!";
         console.log(theBigString.substr(5)); // Fiction is an awesome movie!*/



         //SPLIT - Разделение строки 

         /*let days = "Monday,Tuesday,Wednesday,Thursday,Friday, Saturday,Sunday";
         let splitWords = days.split(",");
         console.log(splitWords[6]); // Sunday*/

         /*let inspirationalQuote = "That which you can concatenate, you can also split apart.";
         let splitWords = inspirationalQuote.split(" ");
         console.log(splitWords.length); // 10 */




         //indexOf
         //Этот метод получает искомый нами знак(и) в качестве аргумента. Если 
         //он его (их) находит, то возвращает позицию индекса строки, где происходит первое включение. Если совпадений не обнаруживается, indexOf
        // возвращает -1. 

        /*let question = "I wonder what the pigs did to make these birds so angry?";
         console.log(question.indexOf("pigs")); // 18

         let question = "I wonder what the pigs did to make these birds soangry?";
          console.log(question.indexOf("z")); // -1  */





          // lastIndexOf
          // он возвращает индекс последнего включения искомого элемента 

          /*let question = "How much wood could a woodchuck chuck if a woodchuck could chuck wood?";
          console.log(question.lastIndexOf("wood")); // 65  */



          //match
          /*let phrase = "There are 3 little pigs.";
          let regexp = /[0-9]/;
          let numbers = phrase.match(regexp);
          console.log(numbers[0]); // 3 */


          // toUpperCase   toLowerCase
         /* let phrase = "My name is Bond. James Bond.";
          console.log(phrase.toUpperCase()); // MY NAME IS BOND. JAMES BOND.
          console.log(phrase.toLowerCase()); // my name is bond. james bond.*/




          //typeof - ПРОВЕРКА ТИПОВ ДАННЫХ

          /*let game = "Dragon Age: Origins";
          console.log("Length is: " + game.length); 
          let gameObject = new String("Dragon Age:Origins");
          console.log(typeof game); // строка
          console.log(typeof game.length); // число
          console.log(typeof gameObject); // объект*/



          //parseInt: ПРЕОБРАЗОВАНИЕ СТРОКИ В ЧИСЛА

          /*let hexValue = parseInt('FFFFFF', 16);
          let octalValue = parseInt('011', 8);*/



          //Infinity // NaN  : 

         /* let myLoveForYou = Infinity * 2;

          let nope = 1920 / "blah";*/



          // MATH
          //функция, возвращающей длину окружности по заданному радиусу:
          function getCircumference(radius) {
            return 2 * Math.PI * radius;
           }
           console.log(getCircumference(2))









           








