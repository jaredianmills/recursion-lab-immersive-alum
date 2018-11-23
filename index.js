function printString(str) {
  console.log(str[0])

  if (str.length > 1) {
    str = str.slice(1, str.length)
    printString(str)
  } else {
    return
  }
}

function reverseString(str, reversedStr = '') {
  if (str.length === 1) {
    return reversedStr + str
  }

  let char = str[str.length - 1]
  reversedStr += char
  str = str.slice(0, str.length - 1)
  return reverseString(str, reversedStr)
}


function isPalindrome(str, reversedStr = '') {
  if (reversedStr.length === Math.floor(str.length / 2)) {
    str = str.slice(0, Math.floor(str.length / 2))
    if (str === reversedStr || str === str[str.length - 1] + reversedStr) {
      return true
    } else {
      return false
    }
  }

  const char = str[str.length - (reversedStr.length + 1)]
  reversedStr += char
  return isPalindrome(str, reversedStr)
}


function addUpTo(arr, n, counter = 0, total = 0) {
  if (counter === n) {
    return total + arr[counter]
  }

  total += arr[counter]
  counter++
  return addUpTo(arr, n, counter, total)
}


function maxOf(arr, highest = arr[0], counter = 1) {
  if (counter === arr.length) {
    return highest
  }

  if (arr[counter] > highest) {
    highest = arr[counter]
    counter++
    return maxOf(arr, highest, counter)
  } else {
    counter++
    return maxOf(arr, highest, counter)
  }
}


function includesNumber(arr, n, counter = 0) {
  if (arr[counter] === n) {
    return true
  }

  if (counter === arr.length) {
    return false
  }

  counter++
  return includesNumber(arr, n, counter)
}
