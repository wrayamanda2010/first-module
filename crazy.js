// Alicia's geometry stuff

function torusVolume(majorR, minorR){
  return (Math.PI * Math.pow(minorR, 2)) * (2 * Math.PI * majorR)
}

console.log(torusVolume(4,3))
