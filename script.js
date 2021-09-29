const hiddenDiv = document.querySelector(".hidden");
const inputDiv = document.querySelector(".inputFields");
const btn = document.querySelector(".srtB");
const nums = document.querySelectorAll("#inn");
const nothing = document.querySelector(".nothing");
const loader = document.querySelector(".loader");
const buttonDiv = document.querySelector(".buttonDiv");
load();

let num1 ;
let num2 ;
let times = 7;
let points = 0;


function load () {
  loader.hidden = true;
  inputDiv.hidden = false;
}

function opposite (){
  inputDiv.hidden = true;
  loader.hidden = false;
}

function load3() {
  hiddenDiv.hidden = true;
  loader.hidden = false;
}

function load4(){
  hiddenDiv.hidden = false;
  loader.hidden = true;
}

const newFunc = function(){

 
     for(let i= 0; i < times; i++){
    if(allNumbers[i].result === inputValues[i][0]){
       points += 1;
       console.log(points)
    } else{
      points += 0;
    }
      
     }
}

 const newFunc2 = function(){
   const h2 = document.querySelector(".h2");
   h2.innerHTML = `<span> YOUR SCORE: </span> <span class="points"> ${points}</span>  /  <b class="bold"> ${times}</b> `
   const createdh2s = document.querySelectorAll(".createdh2");
   for(let i= 0; i < times; i++){
     const spann = document.createElement("span");
     spann.classList.add("resultSpan")
     spann.innerText = ` ${allNumbers[i].result}`

        createdh2s[i].appendChild(spann)
   }

   
  //  gameStart()
 }
 
// opposite();

btn.addEventListener("click", function(e){
 if(btn.classList[1] === "reload"){
  btn.style.marginTop = "15rem"
   load3();
   setTimeout(function(){

     location.reload()
   },1000)

 }else {

   if(btn.classList[1] !== "start"  ){
     if (inputValues.length === 7 ){
       
       load3();
       btn.style.marginTop = "15rem"
       setTimeout(function(){
         btn.style.marginTop = "4rem"
         btn.innerText = "Re-Start"
         btn.classList.add("reload")
         load4();
         newFunc();
         newFunc2();
         
        }, 1200)
     }else{
       alert("Fill The Answers")
     }
    }else{
      
      if( nums[0].value !== "" && nums[1].value !== "" ){
        
        inputDiv.remove()
        btn.style.marginTop = "15rem";
        num1 = nums[0].value;
        num2 = nums[1].value;
        
        opposite();
        
        
        setTimeout(function(){
          
          load();
          
          
          btn.innerText = "SUBMIT"
          btn.classList.remove("start")
          
          gameStart();
        }, 1200)
        
      }else{
        alert("FILL ALL THE INPUTS IDIOT")
      }
    }
    
  }
  })
  
  



 const random =function(num){
  
  let rndIndx =  Math.floor(Math.random() * num) + 1
  return rndIndx;
}
const allNumbers = {};
const inputValues = [];


const func = function(times){
  for (let i = 0; i < times; i++) {
    
    const rn = random(num2)
    const h2 = document.createElement("h2");
    h2.classList.add("createdh2")
    const mN = num1 * rn;
    const cc = num1;
    h2.innerHTML = `${num1} x  ${rn} <input class="innup"/>`
   allNumbers[`${i}`]= { result: mN, randomNumber: rn, constantNumber: parseInt(cc)}
    const br = document.createElement("br")
    hiddenDiv.appendChild(h2);
    hiddenDiv.appendChild(br);
  
    const inpt = document.querySelectorAll(".innup")

    inpt[i].addEventListener("input",function(e){
      inputValues[`${i }`] = [parseInt( e.target.value)]
     
    }
    )
  }
}


const gameStart = function(){

  func(times)
  buttonDiv.style.paddingTop = "3rem";
  buttonDiv.style.paddingBottom = "25rem";
  btn.style.marginTop = "4rem";

}
