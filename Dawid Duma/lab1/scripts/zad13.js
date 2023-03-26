let tablica = new Array(10);

for (i = 0; i < tablica.length; ++i)
{
    tablica[i] = parseInt(prompt("Podaj #" + (i + 1) + " liczbe:"));
}

let szukana = parseInt(prompt("Wpisz szukaną wartość:"));
const index = tablica.findIndex(szukana);

if (index != -1)
{
    prompt("Index szukanej liczby: " + index);
}
else
{
    prompt("Szukana wartość nie znajduje się w tablicy");
}
