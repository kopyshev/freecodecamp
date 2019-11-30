/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Test

fearNotLetter("abce") should return "d".
Passed
fearNotLetter("abcdefghjklmno") should return "i".
Passed
fearNotLetter("stvwx") should return "u".
Passed
fearNotLetter("bcdf") should return "e".
Passed
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
    let missed = str.charCodeAt(0);
    missed++;
    for (let i = 1; i < str.length; i++){
      if (str.charCodeAt(i) != missed){
        return String.fromCharCode(missed);
      }
      missed++;
    }
    return undefined;
  }
  
  fearNotLetter("abce");
