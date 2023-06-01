

const letterAndNumberArray = [0,1,2,3,4,5,6,7,8,9, "A", "B", "C", "D", "E", "F"];
const button= document.querySelector('.btn');
const colorElement= document.querySelector('.color')
button.addEventListener('click', getColor)


function getColor(){

  let HexColor="#"
  for(let i=0; i<6; i++){
    HexColor += letterAndNumberArray[Math.floor(Math.random()*letterAndNumberArray.length)]
  }
 
colorElement.textContent=HexColor;
document.body.style.backgroundColor=HexColor;

}



