/**
 * canvasJs
 */
const registButton = document.getElementById("regist");

/**
 * �`��f�[�^�̎擾
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
 * �C�x���g��`
 */
function init() {

  // �o�^
  registButton.addEventListener("click", regist);
}

init();