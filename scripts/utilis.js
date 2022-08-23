export function between(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


export const timer = ms => new Promise(res => setTimeout(res, ms))

export const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item);

export function getCordinateFromString (str){
  let cordinates;
  if (str !== ""){
    cordinates = str.split("-");
    return cordinates
  }
  return null
} 