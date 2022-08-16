export function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export const timer = ms => new Promise(res => setTimeout(res, ms))

export const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

export function getCordinateFromString (str){
  let cordinates
  let arr = str.split(" ");
  if(arr[0] === "field-square"){
    cordinates = arr[1].split("-");
    return cordinates
  }
  return null
} 