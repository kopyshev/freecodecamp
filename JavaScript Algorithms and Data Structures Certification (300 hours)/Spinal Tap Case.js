/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Test
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
Passed
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
Passed
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
Passed
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
Passed
spinalCase("AllThe-small Things") should return "all-the-small-things".
*/

function spinalCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/[\W_]/g).join('-').toLowerCase();
  }
  
  spinalCase('thisIsSpinalTap');
