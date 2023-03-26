let wiek = 20;

if (wiek < 18)
{
    alert("Treść dostępna wyłącznie dla osób pełnoletnich");
}
else
{
    const p = document.querySelector("#p");
    console.log(p.innerHTML);
    p.innerHTML = "<span style='font-size: 5em'>( ͡° ͜ʖ ͡°)</span>"
}
