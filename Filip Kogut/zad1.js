
const ulr1 = new URL(document.URL)
const fn = ulr1.searchParams.get("fname")
if (fn){
    document.write("<br> Fname is " + fn)            
}

const ln = ulr1.searchParams.get("lname")
if (ln){
    document.write("<br> Lname is " + ln)       
}

document.write("<br>")

const a = parseInt(prompt("Wprowadź liczbę całkowitą"))
if (a % 2 == 0) {
    document.write("a jest liczbą parzystą")
}
else{
    document.write("a nie jest liczbą parzystą")
}

var liczby = []
for (let index = 0; index < 3; index++) {
    const liczb = parseInt(prompt("Wprowadź wszystkie liczby"))
    liczby.push(liczb)
}

document.write("<br>")

document.write(liczby)