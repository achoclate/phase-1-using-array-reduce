const batteryNum = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryNum.reduce(function(total, num){
    return num + total
    }
  );