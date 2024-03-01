const startPoint = 351;
const per = 36;
let winner = 0;

let wheel = document.querySelector(".wheel");
let spinBtn = document.querySelector(".spinBtn");
// let value = Math.ceil((Math.random() * 360) + 1);
let value = 0;

let spinEvent;
spinBtn.onclick = function () {
  value += Math.ceil(Math.random() * 3600);
  wheel.style.transform = "rotate(" + value + "deg)";

  clearTimeout(spinEvent);
  spinEvent = setTimeout(() => {
    let check = false;
    let position = value % 360;
    let i = 0;
    for (; i < 10; i++) {
      let start = (startPoint + per * i) % 360;
      let end = (startPoint + per * (i + 1)) % 360;

      // console.log(start, end);
      // 0 : 351, 27
      // 1 : 315, 351
      // 2 : 279, 315
      // 3 : 243, 279
      // 4 : 207, 243
      // 5 : 171, 207
      // 6 : 135, 171
      // 7 : 99, 135
      // 8 : 63, 99
      // 9 : 27, 63
      if (position >= start && position <= end) {
        check = true;
        winner = 10 - i;
      }
    }
    if (!check) winner = 10 - i;

    prize = document.querySelectorAll(".number span")[winner].innerText;
    alert(`${prize} 당첨!`);
    console.info(`${prize} 당첨!`);
  }, 5000);
};
