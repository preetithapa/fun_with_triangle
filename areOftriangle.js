const firstSide = document.querySelectorAll(".side-input");

const calculate = document.querySelector("#btn-check");
const output = document.querySelector("#output");

function calculateArea(a,b) {
  var area=a*b
  return area
}
function claclateAreaoftriangle(){
  var area=calculateArea(Number(firstSide[0].value),Number(firstSide[1].value))
  areaoftringle=area/2
  output.innerText="area of triangle "+areaoftringle+ " cm"
}
  
 

calculate.addEventListener("click", claclateAreaoftriangle);
