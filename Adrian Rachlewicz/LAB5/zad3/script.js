const container = document.getElementById("container");
const searcher = document.getElementById("search");

const fillDATA = (recordNumbers) => {
  let DATA = [];
  const names = ["Adam", "Jakub", "Leopold", "Marcin"];
  const surNames = ["Kowalski", "Nowak", "Rodak", "Kozak"];

  for (let i = 0; i < recordNumbers; i++) {
    let randomTelephoneNumber = Math.floor(Math.random() * 50000000 + 30000000);
    let randomAge = Math.floor(Math.random() * 62 + 18);
    let tempJSON = {
      name: names[Math.floor(Math.random() * names.length)] + " | ",
      surname: surNames[Math.floor(Math.random() * surNames.length)] + " | ",
      age: randomAge + " " + "lat" + " | ",
      phone: randomTelephoneNumber + " | ",
    };
    DATA.push(tempJSON);
  }
  return DATA;
};

const searching = (event) => {
  console.log(event.target.value);
  container.innerHTML = "";
  writeParagraphs(event.target.value);
};

const DATA = fillDATA(20);

searcher.addEventListener("change", searching);
searcher.addEventListener('keyup',searching)

const writeParagraphs = (find = "") => {
  for (i = 0; i < DATA.length; i++) {
    if (
      DATA[i].name.toLowerCase().includes(find.toLowerCase()) ||
      DATA[i].surname.toLowerCase().includes(find.toLowerCase()) ||
      DATA[i].age.includes(find) ||
      DATA[i].phone.includes(find)
    ) {
      let temp = document.createElement("p");
      temp.innerHTML =
        DATA[i].name +
        " " +
        DATA[i].surname +
        " " +
        DATA[i].age +
        " " +
        DATA[i].phone;
      container.appendChild(temp);
    }
  }
};

writeParagraphs();
