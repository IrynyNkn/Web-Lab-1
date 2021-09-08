const btn = document.getElementById('btn');
const pic = document.getElementById('pic');

btn.addEventListener('click', (e) => {
  pic.classList.toggle('pic--hidden');
});
