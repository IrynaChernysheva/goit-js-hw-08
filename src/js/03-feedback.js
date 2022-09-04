import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const textInput = document.querySelector('.feedback-form');


textInput.addEventListener('submit', onSubmitForm);
textInput.addEventListener('input', throttle(onFormInput, 500));


function onFormInput() {
  const formData = new FormData(textInput);
  let formEl = {};
  formData.forEach((value, name) => (formEl[name] = value.trim()));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formEl));
}


dataFormEl();
function dataFormEl() {
  let parseForm = localStorage.getItem(STORAGE_KEY);
  if (parseForm) {
    parseForm = JSON.parse(parseForm);
    Object.entries(parseForm).forEach(([name, value]) => {
      textInput.elements[name].value = value;
    });
  }
}


function onSubmitForm(evt) {
  evt.preventDefault();
  const inputName = textInput.email.value;
  const inputMessage = textInput.message.value;
  if (inputName && inputMessage !== '') {
    let formEl = localStorage.getItem(STORAGE_KEY);
    formEl = JSON.parse(formEl);
    console.log(formEl);
    localStorage.removeItem(STORAGE_KEY);
    evt.currentTarget.reset();
    return;
  }

  return;
}
