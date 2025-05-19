const input = document.getElementById('input'); //this tag and gives us access the input bar

function reverseString(str) { // use to reverse the string- to get its Palindrome

  return str.split("").reverse().join("")
}

function check() {
  const value = input.value //gives us the value that is typed in the input bar
  const reverse = reverseString(value) // this checks if the input data is a string
  if (value === reverse) {
    alert(" YES ! Its a P A L I N D R O M E")
  } else {
    alert(" NOT P A L I N D R O M E!")
  }

  input.value = "";
}

