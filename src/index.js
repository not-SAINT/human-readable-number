module.exports = function toReadable (number, res = '', isFirstRun = true) {

    if (number == 0 && isFirstRun)
      return 'zero';  
  
    let humanNum = {};
  
    humanNum[1] = 'one';
    humanNum[2] = 'two';
    humanNum[3] = 'three';
    humanNum[4] = 'four';
    humanNum[5] = 'five';
    humanNum[6] = 'six';
    humanNum[7] = 'seven';
    humanNum[8] = 'eight';
    humanNum[9] = 'nine';
    humanNum[10] = 'ten';
    humanNum[11] = 'eleven';
    humanNum[12] = 'twelve';
    humanNum[13] = 'thirteen';
    humanNum[14] = 'fourteen';
    humanNum[15] = 'fifteen';
    humanNum[16] = 'sixteen';
    humanNum[17] = 'seventeen';
    humanNum[18] = 'eighteen';
    humanNum[19] = 'nineteen';
    humanNum[20] = 'twenty';
    humanNum[30] = 'thirty';
    humanNum[40] = 'forty';
    humanNum[50] = 'fifty';
    humanNum[60] = 'sixty';
    humanNum[70] = 'seventy';
    humanNum[80] = 'eighty';
    humanNum[90] = 'ninety';
    humanNum[100] = 'hundred';
    humanNum[1000] = 'thousand';
    
    if (number > 0 && number < 21)
      return (res + ' ' + humanNum[number]).trim();
  
    if (number < 100) {    
      if (Math.floor(number / 10) > 0)
        res = res + ' ' + humanNum[Math.floor(number / 10) * 10];
      if (number % 10 > 0)
        res = ' ' + toReadable(number % 10 , res, false);
    }
    else {
        res = toReadable(Math.floor(number / 100), res, false) + ' ' +
        humanNum[100] + ' ' + toReadable(number % 100, res, false);
    }
  
    return res.trim();
}
