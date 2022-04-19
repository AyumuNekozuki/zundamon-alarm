// ニコニコでやる予定だったやつ

const nicovideo_player = document.getElementById('nicovideoPlayer');
const player_origin = 'https://embed.nicovideo.jp';

const obj_play = {
  sourceConnectorType: 1,
  eventName: 'play'
};
const obj_pause = {
  sourceConnectorType: 1,
  eventName: 'pause'
};


// 関数とか
function playmovie() {
  console.log("ALART!")
  nicovideo_player.contentWindow.postMessage(obj_play, player_origin);
  stopcheck();
}
function stopcheck() {
  document.addEventListener('keypress', stopmovie);
}
function stopmovie() {
  console.log("STOP")
  nicovideo_player.contentWindow.postMessage(obj_pause, player_origin);
}

// アラーム処理
var settime = "6:0:0";

function alarmcheck() {
  var now = new Date();
  var nowtime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  if(nowtime == settime){
    playmovie();
  }
}
var check = setInterval(alarmcheck, 1000);