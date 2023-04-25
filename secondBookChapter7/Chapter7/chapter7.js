
let rightEye = document.getElementById("righteye");
let leftEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");

rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);

document.getElementById('lefteye').style.backgroundColor = 'purple';
document.getElementById('head').style.transform= 'rotate(-15deg)';

// Put a 2‐pixel‐wide, solid black border around his body.
document.getElementById("body").style.border = "2px blacksolid";
// Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his right eye.
document.getElementById("righteye").style.border =
"4px yellow dotted";
// Change his left arm’s color.
document.getElementById("leftarm").style.backgroundColor =
"#FF00FF";
// Change the text color.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop =
"5px black solid";
//make lips pink
document.getElementById('mouth').style.backgroundColor = 'pink';
//Make nose round
document.getElementById('nose').style.borderRadius='50%';
//make right arm green
document.getElementById('rightarm').style.backgroundColor= 'green';



rightEye = document.getElementById('righteye');
rightEye.addEventListener('click', moveUpDown);
//rightEye.addEventListener("click", listener); event set-up.
function moveUpDown(e) {
  let robotPart = e.target;
  let top = 0;

  let id = setInterval(frame, 10) // draw every 10ms

  function frame() {
    robotPart.style.top = top + '%';    
    top++;
    if (top === 20){
      clearInterval(id);
    }
  }
  
}


function moveRightLeft(e) {
  let robotPart = e.target;
  let left = 0;
  let id = setInterval(frame, 10) // draw every 10ms
  function frame() {
    robotPart.style.left = left + '%';
    left++;
    if (left === 70){
      clearInterval(id);
    }
  }
}

leftArm = document.getElementById('leftarm');
leftArm.addEventListener('click',moveRightLeft);

function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
  
    let id = setInterval(frame, 10) // draw every 10ms
  
    function frame() {
      robotPart.style.left = left + '%';    
      left++;
      if (left === 70){
        clearInterval(id);
      }
    }
    
  }

  