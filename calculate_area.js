let d1 = 6;
let d2 = 24;

const calcRhombArea = () => {
  return (6 * 24) / 2;
};

let inMainContent = document.getElementById('inMain');

let rhombBox = document.createElement('div');
rhombBox.textContent = `Rhomb area: ${calcRhombArea()}`;
rhombBox.style.backgroundColor = 'rgb(71, 128, 101)';
rhombBox.style.padding = '10px';
rhombBox.style.textAlign = 'center';
rhombBox.style.color = 'white';

inMainContent.appendChild(rhombBox);
