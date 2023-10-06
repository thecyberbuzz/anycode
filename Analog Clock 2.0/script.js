setInterval(() => {
    let hour = document.getElementById("hour");
    let minute = document.getElementById("minute");
    let second = document.getElementById("second")

    let time = new Date();
    let hArrow = time.getHours();
    let mArrow = time.getMinutes();
    let sArrow = time.getSeconds();

    let hRotation = hArrow*30 + mArrow/2 + sArrow*0.0083333333333333;
    let mRotation = mArrow*6 + sArrow*0.1;
    let sRotation = sArrow*6;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;

  }, 1000);

