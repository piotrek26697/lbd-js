/* Write a JavaScript function to extract unique characters from a string. Not viable inputs should return null.
* Example string : "aaabbbcdgggwerty"
* Expected Output : "cdwerty"
*/
function extractUniqueCharacters(testString) {
  var result = "";
  var test = true;
  var testStr = String(testString);

  if (!testString)
    return result;

  for (var i = 0; i < testStr.length; i++) {
    var character = testStr.charAt(i);

    for (var j = 0; j < testStr.length; j++) {
      if (j !== i) {
        if (character === testStr.charAt(j)) {
          test = false;
          break;
        }
      }
    }
    if (test === true)
      result += character;
    test = true;
  }
  return result;
}

/*
* Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Not viable inputs should return false.
* Example input: 5
* Expected Output : true
*/
function isNumberPrime(testNumber) {
  if (!testNumber)
    return false;
  else if (testNumber < 1)
    return false;
  else if (testNumber === 1)
    return false;
  else if (testNumber === 2)
    return true;
  else {
    for (var i = 2; i < testNumber; i++)
      if (testNumber % i === 0)
        return false;
  }
  return true;
}

/*
* Write a JavaScript function that checks whether a passed string is palindrome or not? Not viable inputs should return false.
* Example input: "kajak"
* Expected Output : true
*/
function isStringPalindrome(testString) {
  var testStr = String(testString);
  if (!testStr)
    return false;

  var i = 0;
  var j = testStr.length - 1;

  while (i < j) {
    if (testStr.charAt(i) !== testStr.charAt(j))
      return false;
    i++;
    j--;
  }
  return true;
}

/*
* Write a JavaScript function that reverse a number. Not viable inputs should return null.
* Example input: 12345
* Expected Output : 54321
*/
function getReversedNumber(testNumber) {    //
  if (!testNumber)
    return null;
  else if (isNaN(parseInt(testNumber)))
    return null;
  var result = "";
  var input = String(testNumber)

  for (var i = input.length - 1; i >= 0; i--) {
    result += input.charAt(i);
  }
  return parseInt(result);
}

/*
* Write a JavaScript function to filter false, null, 0 and blank values from an array. Not viable inputs should return empty array.
* Example input: "[6, '', 'dog', undefined, null, false, 0, 'car']"
* Expected Output : [6, 'dog', 'car']
* */
function filterArray(testArray) {
  var outputArray = [];

  if (!testArray)
    return outputArray;

  for (var i = 0; i < testArray.length; i++) {
    var element = testArray[i];
    if (element) {
      outputArray.push(element);
    }
  }

  return outputArray;
}

/*
* Write a JavaScript function to find the most frequent item of an array. Not viable inputs should return empty array.
* Example input: "[6, ' ', 'dog', undefined, null, false, 0, 'car']"
* Expected Output : [6, 'dog', 'car']
*/
function findMostFrequent(testArray) {
  return []
}

/*
* Write a JavaScript function to find number form fibonacci sequence with provided index.
* Example input: 4
* Expected Output : 3
*/
function getFibonacciNumber(index) {
  if (!index)
    return null;
  else if (index < 0)
    return null;

  if (index == 0)
    return 0;
  else if (index == 1)
    return 1;
  else
    return (getFibonacciNumber(index - 1) + getFibonacciNumber(index - 2));

}

/*
* Write a JavaScript function that takes a string to be encoded and a shift factor and then returns the encoded string.
* the cipher should retain capitalization:
* should not shift punctuation:
* the shift should wrap around the alphabet:
* negative numbers should work as well:
* Example input: 'A', 1
* Expected Output : 'B'
*/
function getCaesarCode(message, factor) {
  return 'encoded message';
}

/*
* Write a JavaScript function that takes 2 integers and returns the sum of every number between(and including) them:
* Example input: 1, 4
* Expected Output : 10 // 1 + 2 + 3 + 4
*/
function sumAll(arg1, arg2) {
  return 0;
}

/*
* Write a JavaScript function that takes 1 string and returns capitalized word:
* Example input: joHN
* Expected Output : John
*/
function capitalize(word) {
  return 0;
}

/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
  return 'hello world!';
}

var assert = require("assert");

describe('1. extractUniqueCharacters', () => {
  it('extractUniqueCharacters should return single character when provided single character', () => {
    var test = extractUniqueCharacters('a');
    var expected = 'a';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return empty string when provided empty string', () => {
    var test = extractUniqueCharacters('');
    var expected = '';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return empty string when provided null', () => {
    var test = extractUniqueCharacters(null);
    var expected = '';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return empty string when provided undefined', () => {
    var test = extractUniqueCharacters(undefined);
    var expected = '';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return same string when provided only unique characters', () => {
    var test = extractUniqueCharacters('abfghjkil');
    var expected = 'abfghjkil';
    assert(test === expected);
  });
  it('extractUniqueCharacters should return string without repeated characters when provided with one', () => {
    var test = extractUniqueCharacters('aaabbcddddeeety');
    var expected = 'cty';
    assert(test === expected);
  });
  it('extractUniqueCharacters should also work when provided numbers', () => {
    var test = extractUniqueCharacters(99987654321);
    var expected = '87654321';
    assert(test === expected);
  });
});

describe('2. isNumberPrime', () => {
  it('isNumberPrime should return true when provided number is prime 5', () => {
    var test = isNumberPrime(5);
    var expected = true;
    assert(test === expected);
  });
  it('isNumberPrime should return true when provided number is prime 199', () => {
    var test = isNumberPrime(199);
    var expected = true;
    assert(test === expected);
  });
  it('isNumberPrime should return false when provided number is negative', () => {
    var test = isNumberPrime(-1);
    var expected = false;
    assert(test === expected);
  });
  it('isNumberPrime should return false when provided number is null', () => {
    var test = isNumberPrime(null);
    var expected = false;
    assert(test === expected);
  });
  it('isNumberPrime should return false when provided number is undefined', () => {
    var test = isNumberPrime(undefined);
    var expected = false;
    assert(test === expected);
  });
  it('isNumberPrime should return true when provided number is parseable string', () => {
    var test = isNumberPrime('149');
    var expected = true;
    assert(test === expected);
  });
});

describe('3. isStringPalindrome', () => {
  it('isStringPalindrome should return true when provided input is a palindrome kajak', () => {
    var test = isStringPalindrome('kajak');
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return true when provided input is a palindrome racecar', () => {
    var test = isStringPalindrome('racecar');
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return true when provided input is a palindrome - wasit...', () => {
    var test = isStringPalindrome('wasitacaroracatisaw');
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided input is not a palindrome', () => {
    var test = isStringPalindrome('amanaplan,acanalpanama');
    var expected = false;
    assert(test === expected);
  });
  it('isStringPalindrome should return true when provided number input is a palindrome', () => {
    var test = isStringPalindrome(789987);
    var expected = true;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided number input is not a palindrome', () => {
    var test = isStringPalindrome(7899878);
    var expected = false;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided input is null', () => {
    var test = isStringPalindrome(null);
    var expected = false;
    assert(test === expected);
  });
  it('isStringPalindrome should return false when provided input is undefined', () => {
    var test = isStringPalindrome(undefined);
    var expected = false;
    assert(test === expected);
  });
});

describe('5. getReversedNumber', () => {
  it('getReversedNumber should return reversed number when provided proper long number', () => {
    var test = getReversedNumber(5456);
    var expected = 6545;
    assert(test === expected);
  });
  it('getReversedNumber should return reversed number when provided single digit', () => {
    var test = getReversedNumber(5);
    var expected = 5;
    assert(test === expected);
  });
  it('getReversedNumber should return null when provided with unparseable string', () => {
    var test = getReversedNumber('crocodile');
    var expected = null;
    assert(test === expected);
  });
  it('getReversedNumber should return reversed number when provided with parseable string', () => {
    var test = getReversedNumber('123');
    var expected = 321;
    assert(test === expected);
  });
  it('getReversedNumber should return null when provided with null', () => {
    var test = getReversedNumber(null);
    var expected = null;
    assert(test === expected);
  });
  it('getReversedNumber should return null number when provided with parseable string', () => {
    var test = getReversedNumber(undefined);
    var expected = null;
    assert(test === expected);
  });
});

describe('6. filterArray', () => {
  it('filterArray should return empty array when provided with null', () => {
    var test = filterArray(null);
    var expected = [];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return empty array when provided with undefined', () => {
    var test = filterArray(null);
    var expected = [];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return empty array when provided with empty array', () => {
    var test = filterArray([]);
    var expected = [];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1]', () => {
    var test = filterArray([1]);
    var expected = [1];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1, 0]', () => {
    var test = filterArray([1, 0]);
    var expected = [1];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1, 0, \'\']', () => {
    var test = filterArray([1, 0, '']);
    var expected = [1];
    assert(test.toString() === expected.toString());
  });
  it('filterArray should return filtered array when provided with array [1, 0, false, undefined, null, 2 , 3]', () => {
    var test = filterArray([1, 0, false, undefined, null, 2, 3]);
    var expected = [1, 2, 3];
    assert(test.toString() === expected.toString());
  });
});

describe('7. findMostFrequent', () => {
  it('findMostFrequent should return most frequent element of an array [1, 0]', () => {
    var test = findMostFrequent([1, 0]);
    var expected = 1;
    assert(test === expected);
  });
  it('findMostFrequent should return null when provided with null input', () => {
    var test = findMostFrequent(null);
    var expected = null;
    assert(test === expected);
  });
  it('findMostFrequent should return null when provided with undefined input', () => {
    var test = findMostFrequent(undefined);
    var expected = null;
    assert(test === expected);
  });
  it('findMostFrequent should return most frequent element of an array [1]', () => {
    var test = findMostFrequent([1]);
    var expected = 1;
    assert(test === expected);
  });
  it('findMostFrequent should return most frequent element of an array [1]', () => {
    var test = findMostFrequent([1, 1]);
    var expected = 1;
    assert(test === expected);
  });
  it('findMostFrequent should return most frequent element of an array [1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9, 0]', () => {
    var test = findMostFrequent([1, 2, 3, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 7, 8, 9, 0]);
    var expected = 7;
    assert(test === expected);
  });
});

describe('8. getFibonacciNumber', () => {
  it('getFibonacciNumber should return null for undefined input', () => {
    var test = getFibonacciNumber(undefined);
    var expected = null;
    assert(test === expected);
  });
  it('getFibonacciNumber should return null for null input', () => {
    var test = getFibonacciNumber(null);
    var expected = null;
    assert(test === expected);
  });
  it('getFibonacciNumber should return null number for negative integers', () => {
    var test = getFibonacciNumber(-1);
    var expected = null;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 0', () => {
    var test = getFibonacciNumber(0);
    var expected = 1;     //?????
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 4', () => {
    var test = getFibonacciNumber(4);
    var expected = 3;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 6', () => {
    var test = getFibonacciNumber(6);
    var expected = 8;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 10', () => {
    var test = getFibonacciNumber(10);
    var expected = 55;
    assert(test === expected);
  });
  it('getFibonacciNumber should return proper number for index 20', () => {
    var test = getFibonacciNumber(20);
    var expected = 6765;
    assert(test === expected);
  });
});

describe('9. getCaesarCode', () => {
  it('getCaesarCode should work with single letters', () => {
    var test = getCaesarCode('A', 1);
    var expected = 'B';
    assert(test === expected);
  });
  it('getCaesarCode should work with words', () => {
    var test = getCaesarCode('A', 1);
    var expected = 'Bbb';
    assert(test === expected);
  });
  it('getCaesarCode should work with phrases', () => {
    var test = getCaesarCode('Hello, World!', 5);
    var expected = 'Mjqqt, Btwqi!';
    assert(test === expected);
  });
  it('getCaesarCode should work with negative shift', () => {
    var test = getCaesarCode('Mjqqt, Btwqi!', -5);
    var expected = 'Hello, World!';
    assert(test === expected);
  });
  it('getCaesarCode should wrap', () => {
    var test = getCaesarCode('Z', 1);
    var expected = 'A';
    assert(test === expected);
  });
  it('getCaesarCode should work with large shift factors', () => {
    var test = getCaesarCode('Hello, World!', 75);
    var expected = 'Ebiil, Tloia!';
    assert(test === expected);
  });
});

describe('10. sumAll', () => {
  it('sumAll should sum numbers within the range', () => {
    var test = sumAll(1, 4);
    var expected = 10;
    assert(test === expected);
  });
  it('sumAll should work with large numbers', () => {
    var test = sumAll(1, 4000);
    var expected = 8002000;
    assert(test === expected);
  });
  it('sumAll should work with large numbers first', () => {
    var test = sumAll(123, 1);
    var expected = 7626;
    assert(test === expected);
  });
  it('sumAll return null with non numeric parameters', () => {
    var test = sumAll(10, "90");
    var expected = null;
    assert(test === expected);
  });
  it('sumAll return null with non numeric parameters []', () => {
    var test = sumAll(10, [90, 1]);
    var expected = null;
    assert(test === expected);
  });
});

describe('11. capitlaize', () => {
  it('capitalize should return emty string when empty string provided', () => {
    var test = capitalize("");
    var expected = "";
    assert(test === expected);
  });
  it('sumAll should return empty string when null provided', () => {
    var test = capitalize(null);
    var expected = "";
    assert(test === expected);
  });
  it('sumAll should return empty string when undefined provided', () => {
    var test = capitalize(undefined);
    var expected = "";
    assert(test === expected);
  });
  it('sumAll should return capitalized string when lowercase string provided', () => {
    var test = capitalize("john");
    var expected = "John";
    assert(test === expected);
  });
  it('sumAll should return capitalized string when uppercase string provided', () => {
    var test = capitalize("BRAVO");
    var expected = "Bravo";
    assert(test === expected);
  });
  it('sumAll should return capitalized string when random case string provided', () => {
    var test = capitalize("BLaNe");
    var expected = "Blane";
    assert(test === expected);
  });
});



