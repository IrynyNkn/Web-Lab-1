let inAsideContent = document.querySelector('.inAside');
let copiedText = document.getElementById('copied');
let inMainContent = document.getElementById('inMain');

inAsideContent.innerHTML = '';

let imgUrlsArr = JSON.parse(localStorage.getItem('imgUrls')) || [];

if (imgUrlsArr.length !== 0) {
  imgUrlsArr.forEach((img) => {
    addImage(img);
  });
}

function storeUrls(url) {
  imgUrlsArr = JSON.parse(localStorage.getItem('imgUrls')) || [];
  imgUrlsArr.push(url);
  localStorage.setItem('imgUrls', JSON.stringify(imgUrlsArr));
}

function addImage(imgUrl) {
  if (!imgUrl) {
    alert('No url address specified');
    return;
  } else {
    storeUrls(imgUrl);
  }

  inAsideContent.classList.add('inAside-img');
  let img = document.createElement('img');
  img.classList.add('inAside__img');
  img.setAttribute('src', imgUrl);
  inAsideContent.appendChild(img);
  if (document.getElementById('imgInput')?.value) {
    document.getElementById('imgInput').value = '';
  }
  console.log(imgUrl);
}

const removeImages = () => {
  inAsideContent.innerHTML = '';
  localStorage.removeItem('imgUrls');
};

const showForm = () => {
  let form = document.createElement('form');
  form.classList.add('form');

  let containerInput = document.createElement('div');
  form.appendChild(containerInput);
  containerInput.classList.add('form__containerInput');

  let label = document.createElement('label');
  containerInput.appendChild(label);
  label.classList.add('form__label');
  label.textContent = 'Input image url';
  label.setAttribute('for', 'imgInput');

  let input = document.createElement('input');
  containerInput.appendChild(input);
  input.classList.add('form__input');
  input.setAttribute(
    'placeholder',
    'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'
  );
  input.setAttribute('id', 'imgInput');
  input.setAttribute('type', 'text');

  let containerSubmit = document.createElement('div');
  containerSubmit.classList.add('form__containerSubmit');
  form.appendChild(containerSubmit);

  let submitBtn = document.createElement('button');
  containerSubmit.appendChild(submitBtn);
  submitBtn.textContent = 'Load image';
  submitBtn.setAttribute('id', 'submitImg');
  submitBtn.classList.add('form__btn');
  submitBtn.setAttribute('type', 'submit');

  let resetBtn = document.createElement('button');
  containerSubmit.appendChild(resetBtn);
  resetBtn.textContent = 'Reset images';
  resetBtn.setAttribute('id', 'resetImg');
  resetBtn.classList.add('form__btn');

  document.getElementById('inMain').innerHTML = '';
  document.getElementById('inMain').appendChild(form);

  document.getElementById('resetImg').addEventListener('click', (e) => {
    e.preventDefault();
    removeImages();
  });

  document.getElementById('submitImg').addEventListener('click', (e) => {
    e.preventDefault();
    let imgUrl = document.getElementById('imgInput').value;
    addImage(imgUrl);
  });
};

copiedText.addEventListener('copy', (e) => {
  inMainContent.className = 'inMain';
  showForm();
});
