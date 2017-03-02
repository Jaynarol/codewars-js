/*
 * https://jsperf.com/split-string-2-word
 * solution1 faster
 */

export function solution1(str){
  return str += '_', [...Array((str.length/2)|0)].map((_, i) => str.substr(i*2,2))
}

export function solution2(str){
  return (str + ['','_'][str.length%2]).match(/.{1,2}/g)
}