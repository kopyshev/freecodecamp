/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


Test
convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
Passed
convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
Passed
convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
Passed
convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
Passed
convertHTML("Schindler's List") should return Schindler&apos;s List.
Passed
convertHTML("<>") should return &lt;&gt;.
Passed
convertHTML("abc") should return abc.
*/

function convertHTML(str) {
    function replacer(match){
    const convertChar = {
      '&': '&amp;',
      '>': '&gt;',
      '<': '&lt;',
      '&': '&amp;',
      "'": '&apos;',
      '"': '&quot;'
    };
    return convertChar[match];
    };
    return str.replace(/([\'\"&<>])/g, replacer );
  }
  
  convertHTML("Schindler's List");