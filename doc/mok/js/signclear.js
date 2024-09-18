/**
 * canvasJs
 */
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const clearButton = document.getElementById("clear");
let isDragging = false;
let lastPosition = { x: null, y: null };

/**
 * �`�揈��
 */
function draw(x, y) {
  if (!isDragging) {
    return;
  }

  // ���[�̌`��, ����, �F
  context.lineCap = "round";
  context.lineWidth = 3;
  context.strokeStyle = "black";

  if (lastPosition.x === null || lastPosition.y === null) {
    context.moveTo(x, y);
  } else {
    context.moveTo(lastPosition.x, lastPosition.y);
  }
  context.lineTo(x, y);
  context.stroke();

  // ���W�ێ�
  lastPosition.x = x;
  lastPosition.y = y;
}

/**
 * �`��̊J�n
 */
function dragStart(event) {
  context.beginPath();
  isDragging = true;
}

/**
 * �`��̏I��
 */
function dragEnd(event) {
  context.closePath();
  isDragging = false;

  // ���W���Z�b�g
  lastPosition.x = null;
  lastPosition.y = null;
}

/**
 * �`��̍폜
 */
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function base64decode(canvasData) {
}

/**
 * �C�x���g��`
 */
function init() {
  // PC�p
  canvas.addEventListener("mousedown", dragStart);
  canvas.addEventListener("mouseup", dragEnd);
  canvas.addEventListener("mouseout", dragEnd);
  canvas.addEventListener("mousemove", (e) => {
    draw(
      e.clientX - canvas.getBoundingClientRect().left,
      e.clientY - canvas.getBoundingClientRect().top
    );
  });
  // SP�p
  canvas.addEventListener("touchstart", dragStart);
  canvas.addEventListener("touchcancel", dragEnd);
  canvas.addEventListener("touchend", dragEnd);
  canvas.addEventListener("touchmove", (e) => {
    // �`���Â炢�̂ŃX���C�v�����Ȃ�
    e.preventDefault();

    let x = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    let y = e.touches[0].clientY - canvas.getBoundingClientRect().top;

    draw(x, y);
  });

  // ���Z�b�g
  clearButton.addEventListener("click", clear);

}

init();