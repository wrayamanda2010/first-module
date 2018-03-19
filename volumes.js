function torusVolume(majorR, minorR){
  return (Math.PI * Math.pow(minorR, 2)) * (2 * Math.PI * majorR)
}

function sphereVolume(radius){
  return 4 * Math.PI * Math.pow(radius, 3) / 3
}


module.exports = {
  torusVolume: torusVolume,
  sphereVolume: sphereVolume
}
