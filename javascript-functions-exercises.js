// http://www.w3resource.com/javascript-exercises/javascript-functions-exercises.php

// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223	

function rev(num) {
	var myarray = num.toString().split(''); // [ '3', '2', '2', '4', '3' ]
	console.log(myarray);
	var temp = []; 
	for (var i = myarray.length-1; i >= 0; i--) {
		temp.push(myarray[i]);
	}
	return parseInt(temp.join(''));
}
rev(32243); 


// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.


var sample = 'nurses run'; 

function pal(string) {
	var array = (string.split(' ').join('').split('')); // [ 'n', 'u', 'r', 's', 'e', 's', 'r', 'u', 'n' ]
	var temp = true;
	for (var i = 0; i <= (array.length-1)/2; i++) {
		if (array[i] !== array[array.length - (i+1)]) {
    		temp = false;
		}
    }
    return temp;
}
pal(sample);




// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 
// Click me to see the solution

function combo(string) {
	string = string.split('');
  var newArr = [];
	for (var i = 0; i < string.length; i++) {
  	for(var j = i + 1; j <= string.length; j++) {
    	newArr.push(string.slice(i, j).join(''));
  	}
	}
  return newArr;
};



// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster' 
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.
// Click me to see the solution

var mySort = function(str) {
	str = str.toLowerCase();
	var arr = str.split('');
	var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (var i = 1; i<arr.length; i++) {
    for (var j = 0; j<arr.length; j++) {
      if (alphabet.indexOf(arr[j]) > alphabet.indexOf(arr[i])) {
        var temp = arr[i]; // switch
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.join('');
};


// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '
// Click me to see the solution


// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial' 
// Expected Output : 'Development'
// Click me to see the solution

function longest(str) {
	str = str.split(' ');
  var final = '';
  for(var i = 0; i < str.length; i++) {
  	if (str[i].length > final.length) {
    	final = str[i];
    }
  }
  return final;
};

/* 
function longest(sentense) {
	var temp; 
	var array = sentense.split(' '); // ['Web', 'Development', 'Tutorial'];
	for (var i = 1; i < array.length; i++) {
  		for (var j = 0; j < array.length; j++) {
			if (array[i].length > array[j].length) {
				temp = array[j];
				array[j] = array[i];
				array[i] = temp;
			}
		}
	}
	return array.join(' '); // 'Development Tutorial Web'
	return array[0]; // 'Development'
}
*/ 


// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5
// Click me to see the solution

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Click me to see the solution








