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



// TODO 特定の日時になったら再生スタート


// なにかキーが押されたら止める
document.addEventListener('keypress', stopmovie);

function stopmovie(e){
  console.log(e)
  nicovideo_player.contentWindow.postMessage(obj_pause, player_origin);
}