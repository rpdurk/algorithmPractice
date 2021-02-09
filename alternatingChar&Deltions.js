const alternatingCharacters = (str) => {
  let result = [];
  str.split('').map((char, i) => {
    if (char === str[i + 1]) {
      result.push(char);
    }
  });
  return result.length;
}

// second solution (written in Java)
// int count = 0;
//         for(int i = 0; i < s.length() - 1; i++){
//             if(s.charAt(i) == s.charAt(i+1)){
//                 ++count;
//             }
//         }
//         return count;