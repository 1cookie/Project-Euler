function largestPalindrome(){
  var stack = [];
  var product = 0;
  for(i=999;i>=100;i--){
    for(j=i;j>=100;j--){
       product = i*j;
        if(checkPalindrome(product))
          stack.push(product);
       
    } 
  }
  var largest = Math.max.apply(Math,stack);
  return largest;
}

function checkPalindrome(str) {
    var str = str+'';
    return str == str.split('').reverse().join('');
}

largestPalindrome(); // 906609
