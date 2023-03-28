
setInterval(() => {
    let nowDate = new Date();
    let Hour = nowDate.getHours();
    let Minutes = nowDate.getMinutes();
    let Seconds = nowDate.getSeconds();
    let hourHandTurn = (30 * Hour + Minutes / 2);
    let minuteHandTurn = 6 * Minutes;
    let secondHandTurn = 6 * Seconds;
    document.getElementById('secHand').style.transform = `rotate(${secondHandTurn}deg)`;
    document.getElementById('minHand').style.transform = `rotate(${minuteHandTurn}deg)`;
    document.getElementById('hourHand').style.transform = `rotate(${hourHandTurn}deg)`;
}, 1000);
