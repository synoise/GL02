function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    alert(x)
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }