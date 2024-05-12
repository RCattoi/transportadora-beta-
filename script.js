const whatsappBTN = document.querySelectorAll('.whatsapp');
whatsappBTN.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.open(`https://wa.me/5521936183691?text=ola`);
  });
});

const btn = document.querySelector('.sendEmail');

const sendEmail = async () => {
  const name = document.querySelector('#inputName4').value;
  const email = document.querySelector('#inputEmail4').value;
  const phone = document.querySelector('#inputPhone4').value;
  const message = document.querySelector('inputMessage4').value;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      message: message,
    }),
  };
  const request = await fetch(
    'https://email-transportadora.onrender.com/data',
    options
  );
  const response = await request.json();
  console.log(response);
};

btn.addEventListener('click', () => sendEmail);
