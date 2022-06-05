const imgEle = document.querySelector('img');
let a = 0;
setInterval(() => {
  a += 0.1;
  console.log(imgEle.style.left);
  imgEle.style.left = `${150 + Math.sin(a) * 150}px`;
  imgEle.style.top = `${250 + Math.cos(a) * 250}px`;
}, 100);
