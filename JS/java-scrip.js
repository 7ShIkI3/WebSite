
function init() {
  // on efface l'élément de la page html dont l'ID est 'listReverse'
  document.getElementById('genMDP').value = "";
  document.getElementById('verifyMDP').value = "";
  }

  function getList() {
    let tab = document.getElementById('genMDP').value;
    let result = [];
    for (let c = 0; c < tab.length; c++) {
      result.push(tab[c]);
    }
    return result;
  }

function generatePassword() {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&;|_~&%§*"-`+=]()).{8,}$/;
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#?!@$%^&;|_~&%§*"-`+=';

  let password = '';
  while (!regex.test(password)) {
    password = '';
    const randomLength = Math.floor(Math.random() * 8) + 8; // Random length between 8 and 15
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  }
  document.getElementById('genMDP').value = password;
  console.log(password);
}

function verifyPassword() {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&;|_~&%§*"-`+=]()).{8,}$/;
  let list = getList();
  
  if (list && list.firstChild) {
    let check = list.firstChild;
    const checkedValue = check.textContent.match(regex);

    if (checkedValue === null) {
      check.insertAdjacentHTML("afterbegin", "<li>Invalid Password!</li>");
    } else {
      //check.insertAdjacentHTML("afterbegin", "<li>" + checkedValue[0] + "</li>"); // Commented out since checkedValue.group() is not applicable in JavaScript
      check.insertAdjacentHTML("afterbegin", "<li>Good Password</li>");
    }
    document.getElementById('verifyMDP').value = check.textContent;
    console.log(check.textContent);
  } else {
    console.log("Error: No list or list.firstChild found.");
  }
}




