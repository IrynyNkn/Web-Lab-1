let inMainContent = document.querySelector('.inMain');

let inMainForm = `<form class="form">
<div class="form__containerInput">
  <label class="form__label" for="numbers"
    >Input your numbers</label
  >
  <input
    placeholder="5 7 10 -2 13 14 1 13 5 100"
    class="form__input"
    id="numbers"
    type="text"
  />
</div>
<div class="form__containerSubmit">
  <button id='submitNumbers' class="form__btn" type="submit">Calculate</button>
</div>
</form>
<div class="infoBox">
    Enter 10 numbers, seperated by comma into the input field
</div>`;

const addListener = () => {
  document.getElementById('submitNumbers').addEventListener('click', (e) => {
    e.preventDefault();
    getMaxMinNums();
  });
};

if (document.cookie) {
  toDelete = confirm(
    `Page contains cookies: ${document.cookie}. Confirm deletion`
  );

  if (toDelete) {
    document.cookie = '';
    inMainContent.innerHTML = inMainForm;
    addListener();
  } else {
    setTimeout(() => {
      alert(`Page contains cookies: ${document.cookie}! Reload the page`);
    }, 0);
  }
} else {
  inMainContent.innerHTML = inMainForm;
  addListener();
}

function getMaxMinNums() {
  let inputValue = document.getElementById('numbers').value;

  let numbers = inputValue.split(' ').map((num) => +num);

  let isCorrect = numbers.length === 10;
  numbers.forEach((num, i) => {
    if (typeof num !== 'number') {
      isCorrect = false;
    }
  });

  if (!isCorrect) {
    alert('Incorrect input. Re-enter your numbers :)');
  } else {
    let maxNum = Math.max(...numbers);
    let minNum = Math.min(...numbers);
    document.cookie = `maxNumber=${maxNum}`;
    document.cookie = `minNumber=${minNum}`;
    alert(`Max number: ${maxNum}
Min number: ${minNum}`);
  }
  console.log(document.cookie);
}

// document.getElementById('submitNumbers').addEventListener('click', (e) => {
//   e.preventDefault();
//   getMaxMinNums();
// });
