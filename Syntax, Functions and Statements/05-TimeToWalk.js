function TimeToWalk(arg1, arg2, arg3) {
    let steps = Number(arg1);
    let stepsMetersHr = Number(arg2);
    let studentSpeed = Number(arg3);
  
    let meters = steps * stepsMetersHr;
    let speedMetersSec = studentSpeed / 3.6;
    let time = meters / speedMetersSec;
    let rest = Math.floor(meters / 500);
  
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
  
  
    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
  
  }