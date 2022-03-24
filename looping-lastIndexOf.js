function lastIndexOf(array, value) {
  for (var i = (array.length - 1); i > -1; i--) {
    if (value === array[i]) {
      var match = true
      var Index = i
      break
    }
  }
  if (match) {
    return Index
  } else {
    return -1
  }
}