let num1 = parseInt(prompt("Podaj #1 liczbe:"));
let num2 = parseInt(prompt("Podaj #2 liczbe:"));

if (num1 > num2)
{
    alert(num1 + " jest wieksze od" + num2);
}
else if (num1 < num2)
{
    alert(num1 + " jest mniejsze od " + num2);
}
else
{
    alert("Liczby są sobie równe");
}
