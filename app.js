const colors = ["green", "red", "rgba(133,122,200)", "#f15025","aqua","black"];
const button = document.querySelector('.btn');
const colorElement= document.querySelector('.color');

button.addEventListener('click', function(){
  let randomColor=colors[Math.floor(Math.random()*colors.length)]

  colorElement.textContent= randomColor;
  document.body.style.backgroundColor= randomColor;

})