var dropdownItems = [
    "Fortinaiyte",
    "Bubb G",
    "Bales Tation Phaiv",
    "Akas Bokus Series Akas",
    "Gerand dif dor diiii",
    "Lambar Gambar",
    "Farrrirrrirrii",
    "Baghtataaa"
  ];

  function populateDropdownItems() {
    var dropdown = document.getElementById("dropdownkiItems");
    dropdown.innerHTML = "";
    // console.log(dropdownItems);
    dropdownItems.forEach(function(item) {
      var a = document.createElement("a");
      a.href = "#";
      a.textContent = item;
      dropdown.appendChild(a);
    });
  }
  populateDropdownItems();
  document.getElementById("search").addEventListener("keyup", function() {
      var input, filter, dropdown, options, a, i, txtValue;
      input = document.getElementById("search");
      filter = input.value.toUpperCase();
      dropdown = document.getElementById("dropdownkiItems");
      options = dropdown.getElementsByTagName("a");
      for (i = 0; i < options.length; i++) {
          a = options[i];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              options[i].style.display = "";
          } else {
              options[i].style.display = "none";
          }
      }
  });
  
  document.addEventListener("click", function(e) {
      var dropdown = document.getElementById("dropdownkiItems");
      if (!e.target.matches("#search")) {
          dropdown.classList.remove("show");
      } else {
          dropdown.classList.add("show");
      }
  
      if (e.target.tagName === 'A') {
          var selectedItemText = e.target.textContent;
          var selectedItemDisplay = document.getElementById("selectedItemDisplay");
          if (selectedItemDisplay) {
              selectedItemDisplay.innerHTML = "<p>" + selectedItemText + "</p>";
          } else {
              selectedItemDisplay = document.createElement("div");
              selectedItemDisplay.id = "selectedItemDisplay";
              selectedItemDisplay.innerHTML = "<p>" + selectedItemText + "</p>";
              document.querySelector('.container').appendChild(selectedItemDisplay);
          }
      }
  });
  