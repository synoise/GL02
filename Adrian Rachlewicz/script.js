// zmienne
let jeden = (prompt("Podaj liczbę pierwszą"));
let dwa = (prompt("Podaj liczbę drugą"));
let x = 5;
let y = 6;
let wiek = 20;
let text = "Treść dostępna wyłącznie dla pełnoletnich!";
let wiekel = document.getElementById("wiek");
let ksiazka = prompt("Podaj nazwę przedmiotu:")
let liczba = prompt("Podaj mi liczbę, a ja ci powiem czy jest parzysta czy nie parzysta");
let tablica = [12,24,4321,12,42,1,12,42,2,12];
let szukana = prompt("Podaj liczbę, której szukasz a ja policze ile razy występuje w tablicy");
let licznik = 0
// if zadanie8
if (x>y)
{
alert("Hello World!");
}

// if zadanie9
if(wiek >= 18)
{
    document.getElementById("wiek").innerHTML = text;
}

// if zadanie10
if(ksiazka == "historia")
{
    document.write("<b>Masz książke do Historii</b>")
}
else if(ksiazka == "matematyka")
{
    document.write("<b>Masz książke do Matematyki</b>")
}
else if(ksiazka == "biologia")
{
    document.write("<b>Masz książke do Biologii</b>")
}
else
{
    document.write("<b>Nieznana książka</b>")
}

// if  zadanie 11

if(jeden == dwa)
{
    alert("jest równe");
}
else if (jeden<dwa)
{
    alert(jeden + " jest mniejsze niż " + dwa);
}
else
{
    alert(jeden + " jest większe niż " + dwa);
}

// if zadanie 12

if(liczba%2 == 0)
{
    alert("jest to liczba parzysta");
}
else
{
    alert("Jest to liczba nie parzysta");
}

// zadanie 13

for(i=0; i<tablica.length; i++)
{
    if(tablica[i] == szukana)
    {
        licznik++
    }
}

alert("Szukana liczba została odnaleziona " + licznik + " razy")

