// test the functions from function.js

function check(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function runTest(testName, testFunction) {
  try {
    testFunction();
    console.log(`✅ ${testName} passed`);
  } catch (error) {
    console.error(`❌ ${testName} failed:\nError: ${error.message}`);
  }
}

console.log("Running tests...\n");

// sumOfArray testing

runTest("sumOfArray should return the sum of all number in an array", () => {
  check(sumOfArray([1, 2, 3, 4]) === 10, "Failed to sum numbers");
});

runTest("sumOfArray should include negative numbers and decimals", () => {
  check(
    sumOfArray([-5, 10, 2.5, 7]) === 14.5,
    "Failed to sum numbers with negatives or decimals",
  );
});

runTest("sumOfArray should handle empty arrays and invalid inputs", () => {
  check(sumOfArray([]) === 0, "Empty array should return 0");
  check(sumOfArray(null) === 0, "Null input should return 0");
  check(sumOfArray([1, "2", "abc"]) === 3, "Invalid values should be ignored");
});

// --- reverseString testing ---

runTest("reverseString should return the reversed string", () => {
  check(reverseString("hello") === "olleh", "Failed to reverse a string");
});

runTest("reverseString should preserve spaces and punctuation", () => {
  check(reverseString("Hi! Bob") === "boB !iH", "Failed with punctuation");
});

runTest("reverseString should handle numbers and invalid inputs", () => {
  check(reverseString(123) === "321", "Failed positive number input");
  check(reverseString(-1) === "1-", "Failed negative number input");
  check(reverseString(null) === "", "Null input should return empty string");
  check(
    reverseString(undefined) === "",
    "Undefined should return empty string",
  );
});

// --- isPalindrome testing ---
