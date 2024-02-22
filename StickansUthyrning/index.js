//POP UP FOR EMAIL-FORM

document.querySelector("#open-popup").addEventListener("click", () => {
  document.querySelector("#popup-overlay").style.display = "block";
  document.querySelector("#input").value = "";
});

//CLOSE E-MAIL FORM
document.querySelector("#close-popup").addEventListener("click", () => {
  document.querySelector("#popup-overlay").style.display = "none";
});

//DROPDOWN MENY FOR MY NAVBAR-LIST

const dropdownMenu = document.querySelector("#dropdown-menu");
const menuButton = document.querySelector("#menu-button");

dropdownMenu.style.display = "none";
menuButton.addEventListener("click", () => {
  if (
    dropdownMenu.style.display === "none" ||
    dropdownMenu.style.display === ""
  ) {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }

  const list_Items_In_Drop_Down_Menu = [
    {
      li: "Hem",
    },
    {
      li: "produkter",
      page: "productPage.html",
    },
    {
      li: "alla mina lån",
      page: "allRentedProductsPage.html",
    },
    {
      li: "skänka bort",
    },
    {
      li: "nyheter",
    },
    {
      li: "uthyrningsregler",
    },
    {
      li: "styrelsen",
    },
    {
      li: "kontakta oss",
      page: "eMailPage.html",
    },
  ];

  function displayListIteams() {
    return (dropdownMenu.innerHTML = list_Items_In_Drop_Down_Menu
      .map((listObject) => {
        return `
      
     
      <li class="nav-list">
      <a href="${listObject.page}">${listObject.li}</a>
  </li>
      
      `;
      })
      .join(""));
  }
  displayListIteams();
});

function messeageHasBeenSend() {
  alert("Ditt meddelande har skickats!");
}

function loanConfirmMes() {
  alert(
    "Ett mejl bekräftelse har skickats till 'pelle.karlsson@form.se'\nTack för att du bryr dig om vår natur"
  );
}

function notAvailableMesg() {
  alert(
    "Åter i lager:  2024-03-20 (om- 10 dagar)\nTack för att du bryr dig om vår natur."
  );
}

function availableMesg() {
  alert(
    "Produkten är tillagd i din varukorg\n\n*Gräsklippare\n*Häcksax\n\nTack för att du bryr dig om vår natur."
  );
}
