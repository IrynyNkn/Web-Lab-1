let inMainContent = document.querySelector('.inMain');
let body = document.getElementById('body');

let bgColor = localStorage.getItem('bg-color');
if (bgColor) {
  body.style.backgroundColor = bgColor;
}

let inMainForm = `<h3>Choose border color</h3>
<form>
  <div>
    <input type="radio" id='palevioletred'>
    <label for="palevioletred">palevioletred</label>
  </div>
  <div>
    <input type="radio" id='seagreen'>
    <label for="seagreen">seagreen</label>
  </div>
  <div>
    <input type="radio" id='steelblue'>
    <label for="steelblue">steelblue</label>
  </div>
  <div>
    <input type="radio" id='olive'>
    <label for="olive">olive</label>
  </div>
  <div>
    <input type="radio" id='powderblue'>
    <label for="powderblue">powderblue</label>
  </div>
  <div>
    <input type="radio" id='rebeccapurple'>
    <label for="rebeccapurple">rebeccapurple</label>
  </div>
  <div>
    <input type="radio" id='salmon'>
    <label for="salmon">salmon</label>
  </div>
</form>`;

inMainContent.innerHTML = inMainForm;

let colors = document.querySelectorAll('input');

const uncheckButtons = (color) => {
  colors.forEach((radioBtn) => {
    radioBtn.checked = false;
  });
};

const changeBorderColor = (color) => {
  body.style.backgroundColor = color;
  uncheckButtons(color);
  localStorage.setItem('bg-color', color);
};

colors.forEach((color) => {
  color.addEventListener('focus', (e) => {
    changeBorderColor(color.id);
  });
});
