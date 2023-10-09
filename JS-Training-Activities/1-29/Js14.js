//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
    if (pin.length !== 4 && pin.length !== 6) {
       return false;
    }
    for (let i = 0; i < pin.length; i++) {
       if (pin[i] > '9' || pin[i] < '0') {
          return false;
       }
 
    }
    return true;
}



/* also being able to do like this

  ^ = start of a line, 
  \d = [0-9], {4} specifies 4 digits, 
  {6} specifies 6 digits, $ - end of a line
  
  first alternative ^\d{4}$ - equivalent to [0-9], matches exactly 4 digits.
  second alternative ^\d{6}$ - "", matches previous token exactly 6 digits.
  
   use RegEx .test to search for these characters stored.
   
*/ 