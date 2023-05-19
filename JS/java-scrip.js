function init() {
  document.getElementById('genMDP').value = "";
  document.getElementById('verifyMDP').value = "";
}

function getList() {
  let tab = document.getElementById('genMDP').value;
  let list = tab.split('|');
  return list.map(item => item.trim());
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
  
  if (list.length > 0) {
    let check = list[0];
    const checkedValue = check.match(regex); // Use match on the check string

    if (checkedValue === null) {
      check = "Invalid Password!"; // Add the error message before the check value
    } else {
      check = "Good Password"; // Add the success message before the check value
    }
    document.getElementById('verifyMDP').value = check;
    console.log(check);
  } else {
    console.log("Error: No list element found.");
  }
}
