function Begrüßung() {
  var name = prompt("Bitte gaben Sie Ihre Namen ein", "");
  if (name != null) {
    document.getElementById("Type").innerHTML =
      "Hallo" + name + "! Herzlich Willkommen auf der Mini-Website.";
  }
}

