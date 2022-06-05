const imgEle = document.querySelector('img');
const img1Ele = document.querySelector('.img1');
let a = 0;
setInterval(() => {
  a += 0.1;
  console.log(imgEle.style.left);
  imgEle.style.left = `${150 + Math.sin(a) * 150}px`;
  imgEle.style.top = `${250 + Math.cos(a) * 250}px`;
  img1Ele.style.left = `${100 + Math.sin(a * 0.5) * 100}px`;
  img1Ele.style.top = `${200 + Math.cos(a * 0.5) * 200}px`;
}, 100);
