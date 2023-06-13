const minut = document.querySelector("#minut");
const secund = document.querySelector("#secund");
const taymerMusic = document.querySelector(".taymerMusic");

function getNumber(){
  let numbers;
  for (let i = 0; i < 61; i++) {
    numbers += `<option value="${i < 10 ? '0' + i : i}">${i < 10 ? '0' + i : i}</option>;`
  }
  return numbers;
}
minut.innerHTML = getNumber();
secund.innerHTML = getNumber();
let a = 1;

function stop(){
  clearInterval(a);
  taymerMusic.pause();
}
function reset(){
  minut.value = "00";
  secund.value = "00";
}
function start(){
  let nowMinut = +minut.value;
  let nowSecund = +secund.value;
  
  a = setInterval(()=> {
    if(nowSecund == 0 && nowMinut == 0){
      stop();
      taymerMusic.play();
    }
    else if(nowSecund == 0){
      nowSecund = 60;
      nowMinut -= 1;
    }
    else{
      nowSecund -= 1;
    }
    minut.value = nowMinut < 10 ? "0" + nowMinut : `${nowMinut}`;
    secund.value = nowSecund < 10 ? "0" + nowSecund : `${nowSecund}`;
  },1000)
}


