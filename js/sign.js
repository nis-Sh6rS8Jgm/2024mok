/**
 * canvasJs
 */
const registButton = document.getElementById("regist");

/**
 * 描画データの取得
 */
function regist() {
  var canvasData = document.getElementById("canvas").toDataURL();
  canvasData = canvasData.replace(/^data:image\/png;base64,/, '');
  alert(canvasData);
  console.log(canvasData);
}

function base64decode(canvasData) {
}

/**
 * イベント定義
 */
function init() {

  // 登録
  registButton.addEventListener("click", regist);
}

init();