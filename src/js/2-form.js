let formData = {
  email: '',
  message: '',
};

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

const inputEmail = form.elements.email;
const inputMessage = form.elements.message;

loadFormData();

form.addEventListener('input', handleInput);

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form submitted:', formData);

  localStorage.removeItem(STORAGE_KEY);

  formData = {
    email: '',
    message: '',
  };

  form.reset();
}

function loadFormData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData) {
    formData = savedData;
    inputEmail.value = formData.email;
    inputMessage.value = formData.message;
  }
}
