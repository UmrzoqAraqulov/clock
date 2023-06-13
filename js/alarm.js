const time = document.querySelector(".alarm .time");
const alarmSong = document.querySelector(".alarmSong");

let nowTime, nowHour, nowMinut, nowSecond;
function getDate(){
  nowTime = new Date();
  nowHour = +nowTime.getHours();
  nowMinut = +nowTime.getMinutes();
  nowSecond = +nowTime.getSeconds();
}
getDate();
time.value = `${nowHour < 10 ? '0' + nowHour:nowHour}:${nowMinut < 10 ? '0' + nowMinut : nowMinut}`;

function getTime(){
  getDate();
  let melodyTime = time.value;
  melodyTime = melodyTime.split(':');
  melodyTime = (+melodyTime[0] - nowHour)  * 3600000 + (+melodyTime[1] - nowMinut) * 60000 - nowSecond * 1000;
  console.log(melodyTime,nowSecond);
  setTimeout(() => {
    alarmSong.play();
  },melodyTime < 0 ? -melodyTime:melodyTime);
}

function stopSong(){
  alarmSong.pause();
}