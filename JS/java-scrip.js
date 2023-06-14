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
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&;|_~&%§*"-`+=]()).{8,}$/;
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

const crypto = require('crypto');

// Fonction pour hacher le mot de passe
function hashPassword(password) {
  const hash = crypto.createHash('sha256');
  hash.update(password);
  return hash.digest('hex');
}

// Fonction pour vérifier si le mot de passe est compromis
function isPasswordCompromised(password, database) {
  const hashedPassword = hashPassword(password);

  // Vérifier si le mot de passe haché se trouve dans la base de données
  return database.includes(hashedPassword);
}

// Exemple d'utilisation
const database = ['b5f7e53d0a87a7ef0a49dd4a60e8fffa']; // Exemple d'un mot de passe haché enregistré dans la base de données

const password = 'monmotdepasse';
const isCompromised = isPasswordCompromised(password, database);


function verifyPassword() {
  const password = document.getElementById("verifyMDP").value;
  let list = getList();

  if (list.length > 0) {
    const isCompromised = isPasswordCompromised(password, list); // Utiliser la fonction isPasswordCompromised

    if (isCompromised) {
      document.getElementById("verifyMDP").value = "Invalid Password!";
      document.getElementById("verifyMDP").classList.add('invalid');
      document.getElementById("verifyMDP").classList.remove('valid');
    } else {
      document.getElementById("verifyMDP").value = "Good Password!";
      document.getElementById("verifyMDP").classList.add('valid');
      document.getElementById("verifyMDP").classList.remove('invalid');
    }
    document.getElementById("verifyMDP").value = check;
    console.log(check);
  } else {
    console.log("Error: No list element found.");
  }
}
