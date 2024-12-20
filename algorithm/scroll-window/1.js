var lengthOfLongestSubstring = function (s) {
  let left =0;
  let right = 0;
  let maxLength=0;

  const windowSet = new Set();

  while(right < s.length){
      if(!windowSet.has(s[right])){
          windowSet.add(s[right]);
          maxLength = Math.max(maxLength, windowSet.size);
          right++;
      }else{
          windowSet.delete(s[left]);
          left++;
      }
    }
    return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb"));