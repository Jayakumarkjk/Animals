const getFactBtn = document.querySelector('#getFactBtn');
const factParagraph = document.querySelector('#fact');

function getNumberFact() {
  return fetch('http://numbersapi.com/random')
    .then(res => {
      if (res.ok) {
        return res.text();
      } else {
        throw new Error('Network Error');
      }
    })
    .catch(error => {
      console.error(error);
    });
}

getFactBtn.addEventListener('click', () => {
  getNumberFact()
    .then(fact => {
      factParagraph.textContent = fact;
    })
    .catch(error => {
      console.error(error);
    });
});