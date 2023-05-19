const generatedPassword = generatePassword();


function generatePassword() {
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&;|_~&%§*"-`+=]()).{8,}$/;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#?!@$%^&;|_~&%§*"-`+=';
    
    let password = '';
    while (!regex.test(password)) {
      for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
      }
    }
    document.getElementById('genMDP').value = password;
    console.log(password);
    
  }
