
//  https://github.com/Mehedi-Hasan2005/assginment-3.js


   // Kilometer To Meter Start .


   function kilometerToMeter(kilo){

    var meter = kilo * 1000;

    return meter;
}

var ResultKmToMeter = kilometerToMeter(8.80);
console.log(ResultKmToMeter);

// Kilometer To Meter End.



//Maga Friend start.

function megaFriend(array) {
    var longWord = "";
  
    array.forEach(function(word) {
      if(word.length > longWord.length) {
        longWord = word;
      }
    });
  
    return longWord;
  }
  
  var word = megaFriend(["golam","sami", "mehedi", "hasan", "tanvir", "kalam", "salam","ProgrammingHero"]);
  console.log(word); 

//Mega Friend End.




// Hotel Cost Start.

function hotalCost(Days){

var stay = 0;

if(Days<=10){

    stay =Days*100;
}
else if ( Days <=20 ){

    var frist10Day = 10*100;
    var remaing = Days -10;
    var second10Day = remaing * 80;
    stay = frist10Day + second10Day;
}
else{
    var frist10Day = 10*100;
    var second10Day = 10*80;
    var remaing = Days - 20;
    var thairDays = remaing*50;
    stay = frist10Day + second10Day + thairDays;

}
return stay;
}
var TotalHotalCost = hotalCost(32)
console.log(TotalHotalCost);

// Hotel Cost Start.






// budgetCalculator  start.

function budgetCalculator(watch, mobile, laptop){

      if (watch >=0 && mobile>=0 && laptop>=0){
        const watchprice = 50;
        const mobileprice = 100;
        const laptoprice =  500;

        var watchmony = watchprice*watch;
        var mobilemony = mobileprice *mobile;
        var laptopmony = laptoprice * laptop;

        var totalmony = watchmony + mobilemony + laptopmony ;

        console.log(totalmony);

      }
      else{
        console.log("Wacth,Mobile,Laptop Cannot be Negative")
      }
    
}
budgetCalculator(2,3,6);


