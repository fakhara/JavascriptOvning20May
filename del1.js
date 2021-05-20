//Skriv en variabel som heter “name” och sätt värdet till ditt namn som en sträng.
const name = "Fakhara Imran";
console.log(name);

//Skriv en funktion som heter “printData” som tar in två argument, en sträng och ett tal.
//kör console.log på båda argument som kommer in.
//Kalla sedan på “printData” och stoppa in (“Hej” och 5).
function printData( string, tal){
    console.log(string, tal);
}
printData("Hej", 5);

//Skriv en funktion som heter “add” som tar in två argument (x och y), två tal.
//Returnera x + y. Printa sedan ut resultatet med console.log.
//Kör sedan funktionen med argumenten (10 och 100).
 function add(x, y){
     const result = x + y;
     return result;
}
console.log(add(10,100));
// Skriv en funktion som heter “A” som tar in ett argument, (x) som är en funktion.
//Kalla på funktionen inuti funktionen. Spara resultatet i en variabel och printa ut värdet.
//Kalla sedan på “A” funktionen och skicka in “add” funktionen du definierade i del 2.

function A(x) {
    const addResult = x;
    console.log(addResult);
}
A(add(10,100));
//Skriv en arrow function som heter “add2” som tar in två argument (x, y) som returnerar x + y.
//Kör funktionen med argumenten (5 och 4) och printa resultatet med console.log.
 const add2 = (x,y) => x+y;
  console.log(add2(4,5));
