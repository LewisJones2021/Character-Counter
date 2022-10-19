const textareaEl = document.getElementById('text-area');
const totalCounterEl = document.getElementById('total-counter');
const remainingCounterEl = document.getElementById('remaining-counter');

textareaEl.addEventListener('keyup', () => {
  updateCounter();
});

updateCounter();
function updateCounter() {
  //count the amount of characters//
  totalCounterEl.innerText = textareaEl.value.length;
  //takeaway remaining characters from total characters//
  remainingCounterEl.innerText =
    textareaEl.getAttribute('maxlength') - textareaEl.value.length;
}
