const hourClock = document.querySelector(".hourClock");
const minutClock = document.querySelector(".minutClock");
const secundClock = document.querySelector(".secundClock");
const mSecundClock = document.querySelector(".mSecundClock");
const dateClock = document.querySelector(".date");


let date,hour,minut,secund,mSecund,year,month,day,week,res;
function getDate(){
  date = new Date();
  hour =  +date.getHours();
  minut =  +date.getMinutes();
  secund =  +date.getSeconds();
  year = +date.getFullYear();
  month = +date.getMonth();
  day = +date.getDate();
  week = +date.getDay();
}
function getInfo(){
  getDate();
  hourClock.textContent = `${hour < 10 ? "0" + hour : hour}`;
  minutClock.textContent = `${minut < 10 ? "0" + minut : minut}`;
  secundClock.textContent = `${secund < 10 ? "0" + secund : secund}`;
  res = `${year}/${month < 10 ? "0" + month : month}/${
    day < 10 ? "0" + day : day
  }`;
  dateClock.textContent = res;
}
getInfo();
setInterval(() => {
  getInfo();
},1000)