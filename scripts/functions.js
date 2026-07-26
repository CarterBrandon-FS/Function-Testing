// Lets set the functons up
// sumOfArray, reverseString, isPalindrome, purgeDuplicates

// sumOfArray

function sumOfArray(array) {
  if (!Array.isArray(array)) return 0;

  return array.reduce((sum, item) => {
    const num = Number(item);
    return sum + (isNaN(num) ? 0 : num);
  }, 0);
}

// reverseString

function reverseString(str) {
  if (typeof str !== "string") {
    if (str === null || str === undefined) return "";
    str = String(str); // convert to string
  }

  return str.split("").reverse().join("");
}

// isPalindrome

function isPalindrome(str) {
  if (typeof str !== "string") {
    if (str === null || str === undefined) return false;
    str = String(str);
  }

  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  if (cleanStr === "") return false;

  return cleanStr === cleanStr.split("").reverse().join("");
}

function purgeDuplicates(array) {
  if (!Array.isArray(array)) return [];

  return [...new Set[array]()];
}

// module.export
