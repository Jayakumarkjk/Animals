var btn1 = document.getElementById('btn1');
var fox = document.getElementById('fox');

btn1.addEventListener('click', fetchdata);

async function fetchdata() {
  fetch('https://randomfox.ca/floof')
    .then(res => {
      console.log(res)
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network Error');
      }
    })
    .then(data => {
      
      const imag=data.image;
      fox.innerHTML = `<img src=${imag} alt="cats" />`
    })
    .catch(error => {
      console.error(error);
    });
}
