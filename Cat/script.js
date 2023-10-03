var btn1 = document.getElementById('btn1');
var cats = document.getElementById('cats');

btn1.addEventListener('click', Cat);

function Cat() {
  fetch('https://cataas.com/c')
    .then(res => {
      if (res.ok) {
        return res.blob();
      } else {
        throw new Error('Network Error');
      }
    })
    .then(blob => {
      const objectURL = URL.createObjectURL(blob);
      cats.innerHTML = `<img src=${objectURL} alt="cats" />`
    })
    .catch(error => {
      console.error(error);
    });
}