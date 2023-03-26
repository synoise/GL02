let ksiazka = prompt("Podaj nazwę przedmiotu:")
ksiazka = ksiazka.toLowerCase();

if (ksiazka === "historia")
{
    document.write("<b>Książka do histori</b>");
}
else if (ksiazka === "matematyka")
{
    document.write("<b>Książka do matematyki</b>");
}
else
{
    document.write("<b>Nieznana książka</b>");
}
