const whatsappBTN = document.querySelectorAll('.whatsapp');
whatsappBTN.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.open(`https://wa.me/5521936183691?text=ola`);
  });
});

const btn = document.querySelector('.sendEmail');
const sendEmail = async (e) => {
  e.preventDefault();
  const name = document.querySelector('#inputName4').value;
  const email = document.querySelector('#inputEmail4').value;
  const phone = document.querySelector('#inputPhone4').value;
  const message = document.querySelector('#inputMessage4').value;

  console.log(name, email, phone, message);
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
    'https://email-transportadora.onrender.com/api/data',
    options
  );
  const response = await request.json();
  let requestResp = '';
  switch (true) {
    case response.message === 'Email is required.':
      requestResp = 'Email é obrigatório';
      break;
    case response.message === 'Message is required..':
      requestResp = 'Mensagem é obrigatória';
      break;
    case response.message === 'Name is required.':
      requestResp = 'Nome é obrigatório';
      break;
    case response.message === 'Phone is required.':
      requestResp = 'Telefone é obrigatório';
      break;
    default:
      requestResp = 'Email enviado com sucesso!';
  }
  console.log(response);
  controlToast(requestResp);
};

btn.addEventListener('click', sendEmail);

function controlToast(texto) {
  const toastTrigger = document.getElementById('liveToastBtn');
  const toastLiveExample = document.getElementById('liveToast');

  if (toastTrigger) {
    const toastBootstrap =
      bootstrap.Toast.getOrCreateInstance(toastLiveExample);
    if (texto.length > 0) {
      toastLiveExample.querySelector('.toast-body').innerText = texto;
      toastBootstrap.show();
    }
  }
}
