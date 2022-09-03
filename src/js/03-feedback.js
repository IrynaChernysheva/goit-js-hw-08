import throttle from 'lodash.throttle';

const textInput = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const formData = {};

textInput.addEventListener('input', throttle(onFormInput, 500));
textInput.addEventListener('submit', onFormSubmit);

formEl();

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);
  evt.currentTarget.reset();
  console.log(formData);
}
function formEl() {
  let inputEl = localStorage.getItem(STORAGE_KEY);
  if (inputEl) {
    inputEl = JSON.parse(inputEl);
  } else {
    return;
  }
  Object.entries(inputEl).forEach(
    ([name, value]) => (textInput.elements[name].value = value)
  );
}
