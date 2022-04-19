// しかたなくつべ

// プレイヤー準備
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    height: '180',
    width: '320',
    videoId: 'YTn37zK4Hck'
  });
}


// 関数まとめ
function playVideo() {
  console.log("ALART!")
  player.playVideo();
  stopcheck();
}
function stopcheck() {
  document.addEventListener('keypress', stopVideo);
}

function stopVideo() {
  console.log("STOP")
  player.stopVideo();
}


// アラーム処理
var settime = "6:0:0";

function alarmcheck() {
  var now = new Date();
  var nowtime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

  if(nowtime == settime){
    playVideo();
  }
}
var check = setInterval(alarmcheck, 1000);