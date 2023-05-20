function showMenu() {
  const elements = Array.from(document.getElementsByClassName("menu-panel"));
  elements.forEach((e) => {
    e.style.visibility = "visible";
  });
}

function hideMenu() {
  const elements = Array.from(document.getElementsByClassName("menu-panel"));
  elements.forEach((e) => {
    e.style.visibility = "hidden";
  });
}

function init() {
  document.getElementById("genMDP").value = "";
  document.getElementById("verifyMDP").value = "";
}

function getList() {
  let tab = document.getElementById("genMDP").value;
  let list = tab.split("|");
  return list.map((item) => item.trim());
}

function generatePassword() {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&;|_~&%§*"-`+=]()).{8,}$/;
  const characters =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#?!@$%^&;|_~&%§*"-`+=';

  let password = "";
  while (!regex.test(password)) {
    password = "";
    const randomLength = Math.floor(Math.random() * 8) + 8; // Random length between 8 and 15
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  }
  document.getElementById("genMDP").value = password;
  console.log(password);
}

function verifyPassword() {
  const regex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&;|_~&%§*"-`+=]()).{8,}$/;
  let list = getList();

  if (list.length > 0) {
    let check = list[0];
    const checkedValue = check.match(regex); // Utiliser match sur la chaîne check

    if (checkedValue === null) {
      check = "Invalid Password!"; // Ajouter le message d'erreur avant la valeur check
      document.getElementById("verifyMDP").classList.add('invalid');
      document.getElementById("verifyMDP").classList.remove('valid');
    } else {
      check = "Good Password!"; // Ajouter le message de réussite avant la valeur check
      document.getElementById("verifyMDP").classList.add('valid');
      document.getElementById("verifyMDP").classList.remove('invalid');
    }
    document.getElementById("verifyMDP").value = check;
    console.log(check);
  } else {
    console.log("Error: No list element found.");
  }
}
